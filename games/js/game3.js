class MainScene extends Phaser.Scene {
  constructor() {
    super();
    this.player;
    this.cursorKeys;
    this.gameState = 0;
    this.second = 0;
  }

  preload() {
    // 플레이어 그래픽 (삼각형 모양)
    let playerGraphics = this.make
      .graphics()
      .fillStyle(0x00ff88)
      .lineStyle(2, 0xffffff)
      .beginPath()
      .moveTo(10, 0)
      .lineTo(20, 20)
      .lineTo(0, 20)
      .closePath()
      .fillPath()
      .strokePath();
    playerGraphics.generateTexture("player", 20, 20);
    playerGraphics.destroy();

    // 총알 그래픽 (화살표 모양)
    let bulletGraphics = this.make
      .graphics()
      .fillStyle(0xff3300)
      .lineStyle(1, 0xffaa00)
      .beginPath()
      .moveTo(5, 0)
      .lineTo(10, 5)
      .lineTo(5, 10)
      .lineTo(0, 5)
      .closePath()
      .fillPath()
      .strokePath();
    bulletGraphics.generateTexture("bullet", 10, 10);
    bulletGraphics.destroy();
  }

  create() {
    // 배경 색상 설정 (임시로 단색 배경 사용)
    this.cameras.main.setBackgroundColor("#1a1a2e");

    // 플레이어 생성
    this.player = this.physics.add.image(250, 250, "player");
    this.player.setCollideWorldBounds(true);
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    // 총알 그룹 생성
    this.bullets = this.physics.add.group();

    // 타이머 설정
    this.textSecond = this.add.text(10, 10, "TIME: 0s", {
      font: "20px Arial",
      fill: "#FFD700",
      stroke: "#000",
      strokeThickness: 3,
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
      .text(250, 300, "Press SPACE to Start", {
        font: "25px Arial",
        fill: "#FFF",
        stroke: "#000",
        strokeThickness: 3,
      })
      .setOrigin(0.5);

    this.textGameOver = this.add
      .text(250, 250, "GAME OVER", {
        font: "25px Arial",
        fill: "#FFF",
        stroke: "#000",
        strokeThickness: 3,
      })
      .setOrigin(0.5)
      .setVisible(false);

    this.textRestart = this.add
      .text(250, 300, "Press SPACE to Restart", {
        font: "25px Arial",
        fill: "#FFF",
        stroke: "#000",
        strokeThickness: 3,
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

    // 플레이어 회전 애니메이션
    this.tweens.add({
      targets: this.player,
      angle: 360,
      duration: 2000,
      repeat: -1,
    });
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

    // 총알 색상 랜덤 설정
    const colors = [0xff3300, 0xffaa00, 0xff00ff, 0x00ffff];
    bullet.setTint(Phaser.Math.RND.pick(colors));

    // 총알 이동 설정
    const angle = Phaser.Math.Angle.Between(x, y, this.player.x, this.player.y);
    const speed = 200;
    this.physics.velocityFromRotation(angle, speed, bullet.body.velocity);

    // 총알 회전 효과
    bullet.angle = Phaser.Math.RadToDeg(angle);
    this.physics.world.on("worldstep", () => {
      bullet.angle += 10;
    });
  }

  hitBullet() {
    this.gameState = 2;
    this.textGameOver.setVisible(true);
    this.textRestart.setVisible(true);
    this.spawnTimer.paused = true;
    this.bullets.clear(true, true);
    this.timerEvent.paused = true;

    // 화면 흔들림 효과
    this.cameras.main.shake(300, 0.01);
  }

  update() {
    this.player.setVelocity(0);

    if (this.gameState === 0) {
      if (this.cursorKeys.space.isDown) {
        this.gameState = 1;
        this.textReady.setVisible(false);
        this.spawnTimer.paused = false;

        // 타이머 이벤트 생성
        this.timerEvent = this.time.addEvent({
          delay: 1000,
          callback: () => {
            this.second++;
            this.textSecond.setText(`TIME: ${this.second}s`);
          },
          callbackScope: this,
          loop: true,
        });
      }
      return;
    }

    if (this.gameState === 2) {
      if (this.cursorKeys.space.isDown) {
        this.second = 0;
        this.gameState = 0;
        this.textGameOver.setVisible(false);
        this.textRestart.setVisible(false);
        this.textReady.setVisible(true);
        this.bullets.clear(true, true);
        this.player.setPosition(250, 250);
        this.spawnTimer.paused = true;
        this.timerEvent.paused = true;
      }
      return;
    }

    // 플레이어 이동
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
