document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.querySelector(".theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "dark";

  document.documentElement.setAttribute("data-theme", currentTheme);

  themeToggle.addEventListener("click", () => {
    const newTheme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.innerHTML =
      newTheme === "dark"
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';
  });

  // 커서 효과
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  const trails = [];
  for (let i = 0; i < 5; i++) {
    const trail = document.createElement("div");
    trail.className = "cursor-trail";
    document.body.appendChild(trail);
    trails.push({ el: trail, x: 0, y: 0 });
  }

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX - 10}px`;
    cursor.style.top = `${e.clientY - 10}px`;

    trails.forEach((trail, index) => {
      setTimeout(() => {
        trail.el.style.left = `${e.clientX - 4}px`;
        trail.el.style.top = `${e.clientY - 4}px`;
      }, index * 50);
    });
  });

  // Mobile Menu
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.forEach((nav) => nav.classList.remove("active"));
      e.target.classList.add("active");
    });
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Dynamic Posts
  const postsSection = document.querySelector(".posts-grid");
  const posts = [
    {
      title: "App Projects",
      link: "posts/post1.html",
      date: "2025-02-21",
      excerpt: "앱 개발 경험을 작성할 예정입니다.",
      tags: ["Kotlin", "Flutter", "Swift"],
    },
    {
      title: "Web Projects",
      link: "posts/post2.html",
      date: "2025-02-20",
      excerpt: "웹 개발 경험을 작성할 예정입니다.",
      tags: ["Javascript", "HTML", "CSS"],
    },
  ];

  const createPostCard = ({ title, link, date, excerpt, tags }) => `
    <article class="post-card">
      <a href="${link}">
        <h3>${title}</h3>
        <p class="post-date">${date}</p>
        <p class="post-excerpt">${excerpt}</p>
        <div class="post-tags">
          ${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </a>
    </article>
  `;

  postsSection.innerHTML = posts.map(createPostCard).join("");

  // Content Loading
  const loadContent = (content) => {
    const mainContent = document.querySelector(".content");
    mainContent.innerHTML = `
      <section class="content-card">
        ${content}
      </section>
    `;
  };

  document.getElementById("aboutBtn").addEventListener("click", (e) => {
    e.preventDefault();
    loadContent(`
      <h2>👋 About Me</h2>
      <p>안녕하세요! iOS와 웹 개발을 사랑하는 개발자 mark77234입니다.</p>
      <div class="skills">
        <h3>기술 스택</h3>
        <div class="skill-tags">
          <span class="tag">Swift</span>
          <span class="tag">JavaScript</span>
          <span class="tag">React</span>
          <span class="tag">Node.js</span>
        </div>
      </div>
    `);
  });

  document.getElementById("contactBtn").addEventListener("click", (e) => {
    e.preventDefault();
    loadContent(`
      <h2>📱 Contact</h2>
      <div class="contact-info">
        <p><i class="fas fa-phone"></i> 010-7723-4412</p>
        <p><i class="fas fa-envelope"></i> mark77234@example.com</p>
        <div class="social-links">
          <a href="https://www.instagram.com/bong_chanii/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://mark7723.tistory.com/" target="_blank">
            <i class="fas fa-blog"></i>
          </a>
        </div>
      </div>
    `);
  });

  document.getElementById("homeBtn").addEventListener("click", (e) => {
    e.preventDefault();
    loadContent(`
      <div class="posts-grid">
        ${posts.map(createPostCard).join("")}
      </div>
    `);
  });

  // 스크롤 진행률
  const scrollProgress = document.createElement("div");
  scrollProgress.className = "scroll-progress";
  document.body.appendChild(scrollProgress);

  window.addEventListener("scroll", () => {
    const scrollProgress =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    document.querySelector(
      ".scroll-progress"
    ).style.width = `${scrollProgress}%`;
  });

  // 태그 클라우드
  const tags = [
    "Swift",
    "Kotlin",
    "JavaScript",
    "React",
    "Node.js",
    "Flutter",
    "UI/UX",
    "Git",
  ];
  const tagCloud = document.createElement("div");
  tagCloud.className = "tag-cloud";
  tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = `#${tag}`;
    tagCloud.appendChild(span);
  });
  document.querySelector(".profile-card").appendChild(tagCloud);

  // Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  document.querySelectorAll(".post-card").forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.5s ease";
    observer.observe(card);
  });

  // Dino Game
  class DinoGame {
    constructor() {
      this.dino = document.getElementById("dino");
      this.obstacle = document.getElementById("obstacle");
      this.scoreElement = document.getElementById("score");
      this.startBtn = document.getElementById("start-btn");
      this.score = 0;
      this.isJumping = false;
      this.gameActive = false;

      this.init();
    }

    init() {
      this.startBtn.addEventListener("click", () => this.startGame());
      document.addEventListener("keydown", (e) => this.handleKeyPress(e));
    }

    startGame() {
      this.gameActive = true;
      this.score = 0;
      this.startBtn.style.display = "none";
      this.obstacle.style.right = "-20px";
      this.updateScore();
      this.moveObstacle();
    }

    handleKeyPress(e) {
      if (e.code === "Space" && !this.isJumping && this.gameActive) {
        this.jump();
      }
    }

    jump() {
      if (!this.isJumping) {
        this.isJumping = true;
        let position = 0;
        const jumpInterval = setInterval(() => {
          if (position >= 150) {
            clearInterval(jumpInterval);
            this.fall();
          } else {
            position += 5;
            this.dino.style.bottom = `${position}px`;
          }
        }, 10);
      }
    }

    fall() {
      let position = 150;
      const fallInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(fallInterval);
          this.isJumping = false;
        } else {
          position -= 5;
          this.dino.style.bottom = `${position}px`;
        }
      }, 10);
    }

    moveObstacle() {
      let obstaclePosition = -20;
      const obstacleInterval = setInterval(() => {
        if (!this.gameActive) {
          clearInterval(obstacleInterval);
          return;
        }

        obstaclePosition += 5;
        this.obstacle.style.right = `${obstaclePosition}px`;

        if (obstaclePosition > window.innerWidth) {
          obstaclePosition = -20;
          this.score++;
          this.updateScore();
        }

        if (this.checkCollision()) {
          this.gameOver();
        }
      }, 20);
    }

    checkCollision() {
      const dinoRect = this.dino.getBoundingClientRect();
      const obstacleRect = this.obstacle.getBoundingClientRect();
      return !(
        dinoRect.right < obstacleRect.left ||
        dinoRect.left > obstacleRect.right ||
        dinoRect.top > obstacleRect.bottom
      );
    }

    gameOver() {
      this.gameActive = false;
      this.startBtn.style.display = "block";
      alert(`Game Over! Score: ${this.score}`);
    }

    updateScore() {
      this.scoreElement.textContent = `Score: ${this.score}`;
    }
  }

  // 게임 초기화
  new DinoGame();
});
