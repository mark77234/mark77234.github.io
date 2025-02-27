// 모듈 임포트
import { SpaceShooterGame } from "./game.js";

// DOM 로드 이벤트 리스너
document.addEventListener("DOMContentLoaded", initApp);

/**
 * 애플리케이션 초기화 함수
 */
function initApp() {
  // 테마 관리자 초기화
  const themeManager = new ThemeManager();

  // 네비게이션 관리자 초기화
  const navManager = new NavigationManager();

  // 콘텐츠 로더 초기화
  const contentLoader = new ContentLoader();

  // 게임 인스턴스 생성
  const dinoGame = new SpaceShooterGame();

  // 부가 기능 초기화
  initScrollProgress();
  initTagCloud();
  initIntersectionObserver();
  initCursorEffect();
}

/**
 * 테마 관리 클래스
 */
class ThemeManager {
  constructor() {
    this.themeToggle = document.querySelector(".theme-toggle");
    this.currentTheme = localStorage.getItem("theme") || "dark";
    this.init();
  }

  /**
   * 테마 초기화 메서드
   */
  init() {
    document.documentElement.setAttribute("data-theme", this.currentTheme);
    this.updateToggleIcon(this.currentTheme);
    this.themeToggle.addEventListener("click", () => this.toggleTheme());
  }

  /**
   * 테마 토글 메서드
   */
  toggleTheme() {
    const newTheme = this.currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    this.updateToggleIcon(newTheme);
    this.currentTheme = newTheme;
  }

  /**
   * 테마 토글 아이콘 업데이트 메서드
   * @param {string} theme - 현재 테마 ('dark' 또는 'light')
   */
  updateToggleIcon(theme) {
    this.themeToggle.innerHTML =
      theme === "dark"
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';
  }
}

/**
 * 네비게이션 관리 클래스
 */
class NavigationManager {
  constructor() {
    this.nav = document.querySelector(".nav");
    this.hamburger = document.querySelector(".hamburger");
    this.init();
  }

  /**
   * 네비게이션 초기화 메서드
   */
  init() {
    this.hamburger.addEventListener("click", () => this.toggleMenu());
    document.querySelectorAll(".nav a").forEach((link) => {
      link.addEventListener("click", (e) => this.handleNavClick(e));
    });
  }

  /**
   * 메뉴 토글 메서드
   */
  toggleMenu() {
    this.hamburger.classList.toggle("active");
    this.nav.classList.toggle("active");
  }

  /**
   * 네비게이션 링크 클릭 처리 메서드
   * @param {Event} e - 클릭 이벤트 객체
   */
  handleNavClick(e) {
    e.preventDefault();
    this.toggleMenu();
    const targetPage = e.target.dataset.page;
    // 페이지별 콘텐츠 로딩 로직 추가 가능
  }
}

/**
 * 콘텐츠 로더 클래스
 */
class ContentLoader {
  constructor() {
    this.posts = [
      {
        title: "App Projects",
        date: "2025-02-21",
        excerpt: "앱 개발 경험을 작성할 예정입니다.",
        tags: ["Kotlin", "Flutter", "Swift"],
      },
      {
        title: "Web Projects",
        date: "2025-02-20",
        excerpt: "웹 개발 경험을 작성할 예정입니다.",
        tags: ["JavaScript", "HTML", "CSS"],
      },
      {
        title: "Other Studyies",
        date: "2025-02-22",
        excerpt: "다른 작업들",
        tags: ["OPIC", "Thinking", "깜깜한미래"],
      },
    ];
    this.init();
  }

  /**
   * 콘텐츠 초기화 메서드
   */
  init() {
    this.renderPosts();
    this.setupContentLinks();
  }

  /**
   * 포스트 렌더링 메서드
   */
  renderPosts() {
    const postsGrid = document.querySelector(".posts-grid");
    postsGrid.innerHTML = this.posts
      .map((post) => this.createPostHTML(post))
      .join("");
  }

  /**
   * 포스트 HTML 생성 메서드
   * @param {Object} post - 포스트 데이터
   * @returns {string} - 포스트 HTML 문자열
   */
  createPostHTML(post) {
    return `
      <article class="post-card">
        <h3>${post.title}</h3>
        <time datetime="${post.date}">${post.date}</time>
        <p>${post.excerpt}</p>
        <div class="tags">
          ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </article>
    `;
  }

  /**
   * 콘텐츠 링크 설정 메서드
   */
  setupContentLinks() {
    document.querySelectorAll("[data-page]").forEach((link) => {
      link.addEventListener("click", (e) => this.loadContent(e));
    });
  }

  /**
   * 콘텐츠 로딩 메서드
   * @param {Event} e - 클릭 이벤트 객체
   */
  loadContent(e) {
    e.preventDefault();
    const page = e.target.dataset.page;
    const mainContent = document.querySelector(".content");

    switch (page) {
      case "home":
        mainContent.innerHTML = `
          <div class="posts-grid">
            ${this.posts.map((post) => this.createPostHTML(post)).join("")}
          </div>
        `;
        break;
      case "about":
        mainContent.innerHTML = `
          <section class="content-card">
            <h2>👋 About Me</h2>
            <p>안녕하세요! iOS와 웹 개발을 사랑하는 개발자 mark77234입니다.</p>
            <div class="skills">
              <h3>기술 스택</h3>
              <div class="skill-tags" >
                <span class="tag">Swift</span>
                <span class="tag">Kotlin</span>
                <span class="tag">Flutter</span>
                <span class="tag">JavaScript</span>
              </div>
            </div>
          </section>
        `;
        break;
      case "contact":
        mainContent.innerHTML = `
          <section class="content-card">
            <h2>📱 Contact</h2>
            <div class="contact-info">
              <p><i class="fas fa-phone"></i> 010-7723-4412</p>
              <p><i class="fas fa-envelope"></i> mark77234@naver.com</p>
              <div class="social-links">
                <a href="https://www.instagram.com/bong_chanii/" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://mark7723.tistory.com/" target="_blank">
                  <i class="fas fa-t"></i>
                </a>
              </div>
            </div>
          </section>
        `;
        break;
      default:
        mainContent.innerHTML = `<p>페이지를 찾을 수 없습니다.</p>`;
    }
  }
}

/**
 * 스크롤 진행률 초기화 함수
 */
function initScrollProgress() {
  const scrollProgress = document.createElement("div");
  scrollProgress.className = "scroll-progress";
  document.body.appendChild(scrollProgress);

  window.addEventListener("scroll", () => {
    const progress =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    document.querySelector(".scroll-progress").style.width = `${progress}%`;
  });
}

/**
 * 태그 클라우드 초기화 함수
 */
function initTagCloud() {
  const tags = ["Swift", "Kotlin", "Flutter", "JavaScript", "UI/UX", "Git"];
  const tagCloud = document.querySelector(".tag-cloud");
  tagCloud.innerHTML = tags
    .map((tag) => `<span class="tag">#${tag}</span>`)
    .join("");
}
