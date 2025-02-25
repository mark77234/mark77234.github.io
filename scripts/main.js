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
  // 네비게이션 메뉴 항목 선택
  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // 기존의 active 클래스를 모두 제거
      navLinks.forEach((nav) => nav.classList.remove("active"));

      // 클릭된 항목에 active 클래스 추가
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
      title: "첫 번째 포스트",
      link: "posts/post1.html",
      date: "2025-02-21",
      excerpt:
        "이것은 첫 번째 포스트의 요약 내용입니다. 최신 웹 개발 기술에 대해 알아봅니다.",
      tags: ["Web", "JavaScript"],
    },
    {
      title: "두 번째 포스트",
      link: "posts/post2.html",
      date: "2025-02-20",
      excerpt:
        "iOS 개발에 관한 두 번째 포스트의 내용 요약입니다. SwiftUI 활용법을 다룹니다.",
      tags: ["iOS", "SwiftUI"],
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

    // 홈 콘텐츠 업데이트
    loadContent(`
      <div class="posts-grid">
        ${posts.map(createPostCard).join("")}
      </div>
    `);
  });
});
