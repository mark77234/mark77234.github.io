/**
 * 콘텐츠 로더 클래스
 */
export class ContentLoader {
  constructor() {
    this.posts = [
      {
        title: "Cyber Jump",
        excerpt: "끝없는 장애물 점프 게임",
        tags: ["Arcade", "Infinite Runner", "2D"],
        link: "posts/game1.html",
      },
      {
        title: "Gravity Puzzle",
        excerpt: "중력 조작 퍼즐 게임",
        tags: ["Puzzle", "Physics", "Brain Teaser"],
        link: "posts/game2.html",
      },
      {
        title: "Space Shooter",
        excerpt: "우주 전투 슈팅 게임",
        tags: ["Shooter", "Space", "Action"],
        link: "posts/game3.html",
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
    this.setupGameLinks(); // 추가된 부분
    this.loadContent({
      preventDefault: () => {},
      target: { dataset: { page: "home" } },
    });
  }

  setupGameLinks() {
    document.querySelectorAll(".post-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        const link = card.dataset.link;
        if (link) {
          window.location.href = link;
        }
      });
    });
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
        <article class="post-card" data-link="${post.link}">
          <h3>${post.title}</h3>
          <br>
          <p>${post.excerpt}</p>
          <div class="tags">
            ${post.tags
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join("")}
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
            <section class="content-card">
              <h2>📱 Contact</h2>
              <div class="contact-info">
                <p><i class="fas fa-phone"></i> 010-7723-4412</p>
                <p><i class="fas fa-envelope"></i> mark77234@naver.com</p>
                <p>병찬로그에 오신걸 환영합니다.</p>
                <p>현재 블로그와 게임 항목을 개발 중 입니다 !</p>
              </div>
            </section>
          `;
        break;
      case "posts":
        mainContent.innerHTML = `
            <section class="content-card">
              <h2>Byeongchan Blog</h2>
              <p>⚠️ 블로그 개발 진행중입니다 ⚠️</p>
              <div class="skills">
                <h3>블로그 개발 진행 상황</h3>
                <div class="skill-tags" >
                  <span class="tag">앱 개발</span>
                  <span class="tag">웹 개발</span>
                  <span class="tag">그 외</span>
                </div>
              </div>
            </section>
          `;
        break;

      case "games":
        mainContent.innerHTML = `
            <div class="posts-grid">
              ${this.posts.map((post) => this.createPostHTML(post)).join("")}
            </div>
          `;
        break;
      default:
        mainContent.innerHTML = `<p>페이지를 찾을 수 없습니다.</p>`;
    }
  }
}
