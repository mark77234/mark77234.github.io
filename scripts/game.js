export class SpaceShooterGame {
  constructor() {
    this.gameContainer = document.getElementById("game-container");
    this.ship = document.getElementById("ship");
    this.stars = document.getElementById("stars");
    this.asteroids = document.getElementById("asteroids");
    this.scoreElement = document.getElementById("score");
    this.startBtn = document.getElementById("start-btn");

    this.score = 0;
    this.isFlipping = false;
    this.gameActive = false;
    this.gravity = 0.4;
    this.velocity = 0;
    this.shipSpeed = 5;
    this.obstacleSpeed = 1;
    this.baseSize = 40;

    this.init();
  }

  init() {
    this.adjustSize();
    this.resetGameState();
    this.startBtn.addEventListener("click", () => this.startGame());
    document.addEventListener("click", () => this.flipGravity());
    document.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.flipGravity();
    });
    window.addEventListener("resize", () => this.adjustSize());
  }

  adjustSize() {
    const scale = Math.min(window.innerWidth / 600, window.innerHeight / 800);
    this.baseSize = 40 * scale;
    this.ship.style.width = `${this.baseSize}px`;
    this.ship.style.height = `${this.baseSize}px`;
  }

  resetGameState() {
    this.score = 0;
    this.gameActive = false;
    this.velocity = 0;
    this.ship.style.top = "50%";
    this.stars.innerHTML = "";
    this.asteroids.innerHTML = "";
    this.updateScore();
  }

  startGame() {
    if (this.gameActive) return;
    this.gameActive = true;
    this.startBtn.hidden = true;
    this.gameLoop();
    this.spawnObjects();
  }

  flipGravity() {
    if (!this.gameActive || this.isFlipping) return;
    this.isFlipping = true;
    this.gravity *= -1;
    setTimeout(() => (this.isFlipping = false), 200);

    // 비행기 회전 애니메이션
    this.ship.style.transform = `rotate(${this.gravity > 0 ? "0" : "180"}deg)`;
  }

  gameLoop() {
    if (!this.gameActive) return;

    // 비행기 위치 업데이트
    const currentTop = parseFloat(this.ship.style.top) || 50;
    this.velocity += this.gravity;
    const newPosition = currentTop + this.velocity;

    this.ship.style.top = `${Math.min(Math.max(newPosition, 5), 95)}%`;

    // 충돌 체크
    this.checkCollisions();

    requestAnimationFrame(() => this.gameLoop());
  }

  spawnObjects() {
    // 별 생성
    setInterval(() => {
      if (!this.gameActive) return;
      const star = document.createElement("div");
      star.className = "star";
      star.style.right = `${Math.random() * 20}%`;
      star.style.top = `${Math.random() * 100}%`;
      this.stars.appendChild(star);
      this.animateStar(star);
    }, 1500);

    // 소행성 생성
    setInterval(() => {
      if (!this.gameActive) return;
      const asteroid = document.createElement("div");
      asteroid.innerHTML = "🪨";
      asteroid.className = "asteroid";
      asteroid.style.right = `${Math.random() * 20}%`;
      asteroid.style.top = `${Math.random() * 100}%`;
      this.asteroids.appendChild(asteroid);
      this.animateAsteroid(asteroid);
    }, 2000);
  }

  animateStar(element) {
    let position = 0;
    const animate = () => {
      position += this.obstacleSpeed * 2;
      element.style.right = `${position}%`;
      if (position < 100) requestAnimationFrame(animate);
      else element.remove();
    };
    animate();
  }

  animateAsteroid(element) {
    let position = 0;
    const animate = () => {
      position += this.obstacleSpeed;
      element.style.right = `${position}%`;
      if (position < 100) requestAnimationFrame(animate);
      else element.remove();
    };
    animate();
  }

  checkCollisions() {
    const shipRect = this.ship.getBoundingClientRect();

    // 별 획득 체크
    document.querySelectorAll(".star").forEach((star) => {
      const starRect = star.getBoundingClientRect();
      if (this.isColliding(shipRect, starRect)) {
        this.score += 10;
        this.updateScore();
        star.remove();
        this.createParticles(starRect);
      }
    });

    // 소행성 충돌 체크
    document.querySelectorAll(".asteroid").forEach((asteroid) => {
      const asteroidRect = asteroid.getBoundingClientRect();
      if (this.isColliding(shipRect, asteroidRect)) {
        this.gameOver();
      }
    });
  }

  isColliding(rect1, rect2) {
    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  }

  createParticles(position) {
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${position.left}px`;
      particle.style.top = `${position.top}px`;
      document.body.appendChild(particle);

      const angle = (Math.PI * 2 * i) / 10;
      const velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5,
      };

      setTimeout(() => {
        particle.remove();
      }, 500);
    }
  }

  gameOver() {
    this.gameActive = false;
    this.startBtn.hidden = false;
    this.startBtn.textContent = `Retry (Score: ${this.score})`;
    this.resetGameState();
  }

  updateScore() {
    this.scoreElement.textContent = `SCORE: ${this.score}`;
    this.obstacleSpeed = 3 + Math.floor(this.score / 10);
  }
}
