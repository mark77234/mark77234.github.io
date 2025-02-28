class MainScene extends Phaser.Scene {
  constructor() {
    super();
    this.player;
    this.cursorKeys;
    this.gameState = 0;
    this.second = 0;
  }

  preload() {
    let playerGraphics = this.make
      .graphics()
      .fillStyle(0x82aaff)
      .fillCircle(15, 15, 15);
    playerGraphics.generateTexture("player", 30, 30);
    playerGraphics.destroy();

    let bulletGraphics = this.make
      .graphics()
      .fillStyle(0xf85149)
      .fillCircle(10, 10, 10);
    bulletGraphics.generateTexture("bullet", 20, 20);
    bulletGraphics.destroy();
  }

  create() {
    this.player = this.physics.add.image(250, 250, "player");
    this.player.setCollideWorldBounds(true);
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.bullets = this.physics.add.group();

    this.textSecond = this.add.text(10, 10, "점수: 0점", {
      font: "20px 'Press Start 2P'",
      fill: "#FFD700",
      stroke: "#000",
      strokeThickness: 3,
    });

    this.spawnTimer = this.time.addEvent({
      delay: 500,
      callback: this.spawnBullet,
      callbackScope: this,
      loop: true,
      paused: true,
    });

    this.textReady = this.add
      .text(250, 300, "스페이스바를 눌러 시작", {
        font: "25px Arial",
        fill: "#FFFFFF",
      })
      .setOrigin(0.5);

    this.textGameOver = this.add
      .text(250, 250, "사망했습니다", {
        font: "25px Arial",
        fill: "#FFFFFF",
      })
      .setOrigin(0.5)
      .setVisible(false);

    this.textRestart = this.add
      .text(250, 300, "스페이스바를 눌러 다시 시작", {
        font: "25px Arial",
        fill: "#FFFFFF",
      })
      .setOrigin(0.5)
      .setVisible(false);

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
      { x: Phaser.Math.Between(0, 500), y: 0 },
      { x: 500, y: Phaser.Math.Between(0, 500) },
      { x: Phaser.Math.Between(0, 500), y: 500 },
      { x: 0, y: Phaser.Math.Between(0, 500) },
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
    this.timerEvent.paused = true;
  }

  update() {
    this.player.setVelocity(0);

    if (this.gameState === 0) {
      if (this.cursorKeys.space.isDown) {
        this.gameState = 1;
        this.textReady.setVisible(false);
        this.spawnTimer.paused = false;

        this.timerEvent = this.time.addEvent({
          delay: 1000,
          callback: () => {
            this.second++;
            this.textSecond.setText(`점수: ${this.second}점`);
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
