class MainScene extends Phaser.Scene {
  constructor() {
    super();
    this.player;
    this.cursorKeys;
    this.gameState = 0;
    this.second = 0; // 초기화를 위해 constructor로 이동
  }

  preload() {
    // 플레이어 텍스처 생성
    let playerGraphics = this.make
      .graphics()
      .fillStyle(0x00ff00)
      .fillCircle(10, 10, 10);
    playerGraphics.generateTexture("player", 20, 20);
    playerGraphics.destroy();

    // 총알 텍스처 생성
    let bulletGraphics = this.make
      .graphics()
      .fillStyle(0xff0000)
      .fillCircle(5, 5, 5);
    bulletGraphics.generateTexture("bullet", 10, 10);
    bulletGraphics.destroy();
  }

  create() {
    this.player = this.physics.add.image(250, 250, "player");
    this.player.setCollideWorldBounds(true);
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    // 총알 그룹 생성
    this.bullets = this.physics.add.group();

    // 타이머 설정
    this.textSecond = this.add.text(10, 10, "Time : 0s", {
      font: "25px Arial",
      fill: "#FFFFFF",
    });

    // 총알 생성 이벤트
    this.spawnTimer = this.time.addEvent({
      delay: 500,
      callback: this.spawnBullet,
      callbackScope: this,
      loop: true,
      paused: true,
    });

    // UI 요소들
    this.textReady = this.add
      .text(250, 300, "Press space to Start", {
        font: "25px Arial",
        fill: "#FFFFFF",
      })
      .setOrigin(0.5);

    this.textGameOver = this.add
      .text(250, 250, "Game Over", {
        font: "25px Arial",
        fill: "#FFFFFF",
      })
      .setOrigin(0.5)
      .setVisible(false);

    this.textRestart = this.add
      .text(250, 300, "Press Space to Restart", {
        font: "25px Arial",
        fill: "#FFFFFF",
      })
      .setOrigin(0.5)
      .setVisible(false);

    // 충돌 감지 설정
    this.physics.add.overlap(
      this.player,
      this.bullets,
      this.hitBullet,
      null,
      this
    );
  }

  spawnBullet() {
    const edges = [
      { x: Phaser.Math.Between(0, 500), y: 0 }, // 상단
      { x: 500, y: Phaser.Math.Between(0, 500) }, // 우측
      { x: Phaser.Math.Between(0, 500), y: 500 }, // 하단
      { x: 0, y: Phaser.Math.Between(0, 500) }, // 좌측
    ];

    const { x, y } = Phaser.Math.RND.pick(edges);
    const bullet = this.bullets.create(x, y, "bullet");

    const angle = Phaser.Math.Angle.Between(x, y, this.player.x, this.player.y);
    const speed = 200;
    this.physics.velocityFromRotation(angle, speed, bullet.body.velocity);
  }

  hitBullet() {
    this.gameState = 2;
    this.textGameOver.setVisible(true);
    this.textRestart.setVisible(true);
    this.spawnTimer.paused = true;
    this.bullets.clear(true, true);
    this.timerEvent.paused = true; // 타이머 중지
  }

  update() {
    this.player.setVelocity(0);

    if (this.gameState === 0) {
      if (this.cursorKeys.space.isDown) {
        this.gameState = 1;
        this.textReady.setVisible(false);
        this.spawnTimer.paused = false;

        // 타이머 이벤트 생성 (1초마다 시간 업데이트)
        this.timerEvent = this.time.addEvent({
          delay: 1000,
          callback: () => {
            this.second++;
            this.textSecond.setText(`Time: ${this.second}s`);
          },
          callbackScope: this,
          loop: true,
        });
      }
      return;
    }

    if (this.gameState === 2) {
      if (this.cursorKeys.space.isDown) {
        this.second = 0; // 시간 초기화
        this.gameState = 0; // 게임 상태 초기화
        this.textGameOver.setVisible(false);
        this.textRestart.setVisible(false);
        this.textReady.setVisible(true);
        this.bullets.clear(true, true); // 총알 초기화
        this.player.setPosition(250, 250); // 플레이어 위치 초기화
        this.spawnTimer.paused = true; // 총알 생성 중지
        this.timerEvent.paused = true; // 타이머 중지
      }
      return;
    }

    if (this.cursorKeys.up.isDown) this.player.setVelocityY(-200);
    if (this.cursorKeys.down.isDown) this.player.setVelocityY(200);
    if (this.cursorKeys.left.isDown) this.player.setVelocityX(-200);
    if (this.cursorKeys.right.isDown) this.player.setVelocityX(200);
  }
}

const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 500,
  parent: "game",
  backgroundColor: "#000000",
  physics: {
    default: "arcade",
    arcade: { debug: false },
  },
  scene: MainScene,
};

new Phaser.Game(config);
