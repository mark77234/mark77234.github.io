export class ContentLoader {
  constructor() {
    this.posts = [
      {
        title: "Cyber Jump",
        excerpt: "끝없는 장애물 점프 게임",
        tags: ["Arcade", "Infinite Runner", "2D"],
        link: "games/game1.html",
      },
      {
        title: "Gravity Puzzle",
        excerpt: "중력 조작 퍼즐 게임",
        tags: ["Puzzle", "Physics", "Brain Teaser"],
        link: "games/game2.html",
      },
      {
        title: "Space Shooter",
        excerpt: "우주 전투 슈팅 게임",
        tags: ["Shooter", "Space", "Action"],
        link: "games/game3.html",
      },
    ];
    this.init();
  }

  init() {
    this.renderPosts();
    this.setupContentLinks();
    this.setupGameLinks();
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

  renderPosts() {
    const postsGrid = document.querySelector(".posts-grid");
    postsGrid.innerHTML = this.posts
      .map((post) => this.createPostHTML(post))
      .join("");
  }

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
          <section class="hero-section">
            <div class="hero-content">
              <h1>병찬로그에 오신 것을 환영합니다!</h1>
              <p class="hero-subtitle">실시간으로 업데이트되는 이병찬의 놀이터입니다.</p>
              <div class="cta-buttons">
                <button class="cta-button" data-page="games">
                  <i class="fas fa-gamepad"></i>
                  게임 즐기기
                </button>
                <button class="cta-button" data-page="posts">
                  <i class="fas fa-eye"></i>
                  실시간 업데이트 되는 블로그 둘러보기
                </button>
              </div>
            </div>
          </section>
  
          <section class="features-grid">
            <article class="feature-card">
              <div class="feature-icon" style="background: ${getComputedStyle(
                document.documentElement
              ).getPropertyValue("--primary")}">
                <i class="fas fa-code"></i>
              </div>
              <h3>최신 개발 트렌드</h3>
              <p>웹/앱 개발의 최신 기술과 팁을 공유합니다</p>
            </article>
  
            <article class="feature-card">
              <div class="feature-icon" style="background: var(--secondary)">
                <i class="fas fa-puzzle-piece"></i>
              </div>
              <h3>인터랙티브 게임</h3>
              <p>직접 제작한 재미있는 웹 게임들을 만나보세요</p>
            </article>
  
            <article class="feature-card">
              <div class="feature-icon" style="background: var(--success)">
                <i class="fas fa-rocket"></i>
              </div>
              <h3>프로젝트 기록</h3>
              <p>지속적인 성장 과정을 투명하게 공개합니다</p>
            </article>
          </section>
  
          <section class="contact-card">
            <h2><i class="fas fa-comments"></i> 연락처</h2>
            <div class="contact-grid">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div>
                  <h4>전화번호</h4>
                  <p>010-7723-4412</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div>
                  <h4>이메일</h4>
                  <p>mark77234@naver.com</p>
                </div>
              </div>
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
        this.setupGameLinks();
        break;
      default:
        mainContent.innerHTML = `<p>페이지를 찾을 수 없습니다.</p>`;
    }
  }
}
