const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const healthElement = document.getElementById("health");

// Player properties
const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 20,
  speed: 5,
  tears: [],
  shootDirection: { x: 0, y: 0 },
};

// Game state
let enemies = [];
let items = [];
let particles = [];
let score = 0;
let health = 5;
let lastShot = 0;
let shakeTime = 0;
let powerupTimer = 0;
const KNOCKBACK_FORCE = 8;
const SHOOT_DELAY = 200;
const SHAKE_INTENSITY = 5;

// Key states
const keys = {
  KeyA: false,
  KeyD: false,
  KeyW: false,
  KeyS: false,
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
};

// Item types
const ITEM_TYPES = {
  HEALTH: 0,
  SPEED: 1,
  TRIPLE_SHOT: 2,
};

// Enemy types
const ENEMY_TYPES = {
  CHARGER: 0, // 직선 돌진형
  ORBITER: 1, // 궤도 회전형
  SHOOTER: 2, // 원거리 공격형
};

// Event listeners
document.addEventListener("keydown", (e) => {
  if (keys.hasOwnProperty(e.code)) keys[e.code] = true;
  updateShootDirection();
});
document.addEventListener("keyup", (e) => {
  if (keys.hasOwnProperty(e.code)) keys[e.code] = false;
  updateShootDirection();
});

function updateShootDirection() {
  player.shootDirection.x = 0;
  player.shootDirection.y = 0;

  if (keys.ArrowLeft) player.shootDirection.x -= 1;
  if (keys.ArrowRight) player.shootDirection.x += 1;
  if (keys.ArrowUp) player.shootDirection.y -= 1;
  if (keys.ArrowDown) player.shootDirection.y += 1;
}

// 적 생성 함수
function spawnEnemy() {
  const type =
    Math.random() < 0.3
      ? ENEMY_TYPES.ORBITER
      : Math.random() < 0.6
      ? ENEMY_TYPES.SHOOTER
      : ENEMY_TYPES.CHARGER;

  const baseEnemy = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 15,
    health: 2,
    lastShot: 0,
    shootDelay: 1500,
    orbitAngle: 0,
  };

  switch (type) {
    case ENEMY_TYPES.CHARGER:
      return {
        ...baseEnemy,
        type,
        speed: 3.5,
        color: "#FF4444",
        update: function (player) {
          const angle = Math.atan2(player.y - this.y, player.x - this.x);
          this.x += Math.cos(angle) * this.speed;
          this.y += Math.sin(angle) * this.speed;
        },
      };

    case ENEMY_TYPES.ORBITER:
      return {
        ...baseEnemy,
        type,
        speed: 2,
        orbitRadius: 100,
        color: "#44FF44",
        update: function (player) {
          this.orbitAngle += 0.03;
          const targetX =
            player.x + Math.cos(this.orbitAngle) * this.orbitRadius;
          const targetY =
            player.y + Math.sin(this.orbitAngle) * this.orbitRadius;

          const angle = Math.atan2(targetY - this.y, targetX - this.x);
          this.x += Math.cos(angle) * this.speed;
          this.y += Math.sin(angle) * this.speed;
        },
      };

    case ENEMY_TYPES.SHOOTER:
      return {
        ...baseEnemy,
        type,
        speed: 1.8,
        color: "#4444FF",
        update: function (player) {
          // 플레이어 추적
          const angle = Math.atan2(player.y - this.y, player.x - this.x);
          this.x += Math.cos(angle) * this.speed;
          this.y += Math.sin(angle) * this.speed;

          // 주기적으로 발사
          if (Date.now() - this.lastShot > this.shootDelay) {
            const bulletAngle = Math.atan2(
              player.y - this.y,
              player.x - this.x
            );
            enemies.push({
              x: this.x,
              y: this.y,
              dx: Math.cos(bulletAngle) * 5,
              dy: Math.sin(bulletAngle) * 5,
              size: 8,
              health: 1,
              color: "#8888FF",
              type: "BULLET",
            });
            this.lastShot = Date.now();
          }
        },
      };
  }
}

// 아이템 생성 함수
function spawnItem(x, y) {
  if (Math.random() < 0.3) {
    const type = Math.floor(Math.random() * 3);
    items.push({
      x,
      y,
      type,
      size: 12,
      color:
        type === ITEM_TYPES.HEALTH
          ? "#FF0000"
          : type === ITEM_TYPES.SPEED
          ? "#00FF00"
          : "#0000FF",
      blinkTimer: 0,
    });
  }
}

// 아이템 효과 적용
function applyItemEffect(item) {
  switch (item.type) {
    case ITEM_TYPES.HEALTH:
      health = Math.min(5, health + 1); // 최대 생명력 5까지 증가
      healthElement.textContent = "❤".repeat(health); // 화면에 생명력 표시
      break;

    case ITEM_TYPES.SPEED:
      player.speed += 1;
      setTimeout(() => {
        player.speed -= 1;
      }, 10000); // 10초간 속도 증가
      break;

    case ITEM_TYPES.TRIPLE_SHOT:
      powerupTimer = 5000; // 5초간 3연발 발사
      break;
  }
}

// 파티클 생성 함수
function createParticles(x, y, color) {
  for (let i = 0; i < 8; i++) {
    particles.push({
      x: x + (Math.random() - 0.5) * 10,
      y: y + (Math.random() - 0.5) * 10,
      dx: (Math.random() - 0.5) * 4,
      dy: (Math.random() - 0.5) * 4,
      size: Math.random() * 3 + 2,
      color: color,
      alpha: 1,
      lifetime: 30,
    });
  }
}

// 업데이트 함수
function update() {
  // Player movement
  let moveX = 0,
    moveY = 0;
  if (keys.KeyA) moveX -= 1;
  if (keys.KeyD) moveX += 1;
  if (keys.KeyW) moveY -= 1;
  if (keys.KeyS) moveY += 1;

  player.x = Math.max(
    player.size,
    Math.min(canvas.width - player.size, player.x + moveX * player.speed)
  );
  player.y = Math.max(
    player.size,
    Math.min(canvas.height - player.size, player.y + moveY * player.speed)
  );

  // Continuous shooting
  const now = Date.now();
  if (player.shootDirection.x !== 0 || player.shootDirection.y !== 0) {
    if (now - lastShot > SHOOT_DELAY) {
      const angle = Math.atan2(
        player.shootDirection.y,
        player.shootDirection.x
      );
      const tearCount = powerupTimer > 0 ? 3 : 1;

      for (let i = 0; i < tearCount; i++) {
        const offset = i === 0 ? 0 : i === 1 ? -0.2 : 0.2;
        player.tears.push({
          x: player.x,
          y: player.y,
          dx: Math.cos(angle + offset) * 7,
          dy: Math.sin(angle + offset) * 7,
          size: 5,
          trail: [],
        });
      }
      lastShot = now;
    }
  }

  // Update tears
  for (let i = player.tears.length - 1; i >= 0; i--) {
    const tear = player.tears[i];
    tear.trail.push({ x: tear.x, y: tear.y });
    if (tear.trail.length > 5) tear.trail.shift();

    tear.x += tear.dx;
    tear.y += tear.dy;

    if (
      tear.x < 0 ||
      tear.x > canvas.width ||
      tear.y < 0 ||
      tear.y > canvas.height
    ) {
      player.tears.splice(i, 1);
    }
  }

  // Spawn enemies
  if (Math.random() < 0.03) {
    enemies.push(spawnEnemy());
  }

  // Update enemies
  enemies.forEach((enemy) => {
    if (enemy.update) enemy.update(player);
  });

  // Collision detection
  enemies.forEach((enemy, eIndex) => {
    // Tears vs Enemies
    player.tears.forEach((tear, tIndex) => {
      const dx = tear.x - enemy.x;
      const dy = tear.y - enemy.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < enemy.size + tear.size) {
        enemy.health--;
        enemy.x += tear.dx * KNOCKBACK_FORCE;
        enemy.y += tear.dy * KNOCKBACK_FORCE;
        player.tears.splice(tIndex, 1);
        createParticles(enemy.x, enemy.y, "#FF5555");

        if (enemy.health <= 0) {
          createParticles(enemy.x, enemy.y, "#FFAA00");
          enemies.splice(eIndex, 1);
          score += 10;
          scoreElement.textContent = `Score: ${score}`;
          spawnItem(enemy.x, enemy.y);
        }
      }
    });

    // Player vs Enemies
    const pdx = player.x - enemy.x;
    const pdy = player.y - enemy.y;
    const pdistance = Math.sqrt(pdx * pdx + pdy * pdy);
    if (pdistance < player.size + enemy.size) {
      health--;
      shakeTime = 10;
      healthElement.textContent = "❤".repeat(health);
      enemies.splice(eIndex, 1);

      // Player knockback
      const knockbackAngle = Math.atan2(player.y - enemy.y, player.x - enemy.x);
      player.x += Math.cos(knockbackAngle) * KNOCKBACK_FORCE * 2;
      player.y += Math.sin(knockbackAngle) * KNOCKBACK_FORCE * 2;

      if (health <= 0) {
        alert(`Game Over! 최종 점수: ${score}`);
        document.location.reload();
      }
    }
  });

  // Update items
  items.forEach((item, index) => {
    const dx = player.x - item.x;
    const dy = player.y - item.y;
    if (Math.sqrt(dx * dx + dy * dy) < player.size + item.size) {
      applyItemEffect(item);
      items.splice(index, 1);
    }
  });

  // Update particles
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.dx;
    p.y += p.dy;
    p.alpha -= 0.03;
    p.size *= 0.95;
    if (p.alpha <= 0) particles.splice(i, 1);
  }

  // Update powerup timer
  if (powerupTimer > 0) {
    powerupTimer -= 16; // 16ms (약 60fps 기준)
  }

  requestAnimationFrame(update);
  draw();
}

// Draw function
function draw() {
  ctx.save();

  // Screen shake effect
  if (shakeTime > 0) {
    ctx.translate(
      (Math.random() - 0.5) * SHAKE_INTENSITY,
      (Math.random() - 0.5) * SHAKE_INTENSITY
    );
    shakeTime--;
  }

  // Background
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw tears with trails
  ctx.fillStyle = "rgba(100, 200, 255, 0.7)";
  player.tears.forEach((tear) => {
    tear.trail.forEach((pos, index) => {
      ctx.globalAlpha = 0.2 + index * 0.15;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, tear.size * (0.5 + index / 5), 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(tear.x, tear.y, tear.size, 0, Math.PI * 2);
    ctx.fill();
  });

  // Draw player
  ctx.fillStyle = "#FFF";
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
  ctx.fill();

  // Draw enemies
  enemies.forEach((enemy) => {
    ctx.fillStyle = enemy.color;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.size, 0, Math.PI * 2);
    ctx.fill();
  });

  // Draw items
  items.forEach((item) => {
    item.blinkTimer = (item.blinkTimer + 0.1) % (Math.PI * 2);
    ctx.globalAlpha = 0.5 + Math.abs(Math.sin(item.blinkTimer)) * 0.5;
    ctx.fillStyle = item.color;
    ctx.beginPath();
    ctx.arc(item.x, item.y, item.size, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;

  // Draw particles
  particles.forEach((p) => {
    ctx.fillStyle = `rgba(${parseInt(p.color.slice(1, 3), 16)}, ${parseInt(
      p.color.slice(3, 5),
      16
    )}, ${parseInt(p.color.slice(5, 7), 16)}, ${p.alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}

update();
