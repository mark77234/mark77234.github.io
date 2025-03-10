export class ContentLoader {
  constructor() {
    this.games = [
      {
        title: "NEON JUMP 3D(개발중)",
        excerpt: "장애물들을 피하면서 점수를 획득하라",
        tags: ["3D", "Neon", "Jump"],
        link: "games/game1.html",
      },
      {
        title: "짭이작(개발중)",
        excerpt: "개발중",
        tags: ["개발단계", "10% 진행중"],
        link: "games/game2.html", //games/game2.html
      },
      {
        title: "AVOID! (BETA)",
        excerpt: "날라오는 총알들을 피하라",
        tags: ["Avoid", "Bullet", "Survive"],
        link: "games/game3.html",
      },
    ];
    this.posts = [
      {
        title: "테스트 블로그",
        excerpt: "TEST",
        tags: ["test"],
        link: "posts/post1.html",
      },
    ];
    this.init();
  }

  init() {
    this.renderSubs();
    this.setupContentLinks();
    this.setupNavLinks();
    this.loadContent({
      preventDefault: () => {},
      target: { dataset: { page: "home" } },
    });
  }

  setupNavLinks() {
    document.querySelectorAll(".nav-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        const link = card.dataset.link;
        if (link) {
          window.location.href = link;
        }
      });
    });
  }

  renderSubs() {
    const postsGrid = document.querySelector(".subs-grid");
    postsGrid.innerHTML = this.games
      .map((post) => this.createSubHTML(post))
      .join("");
  }

  createSubHTML(sub) {
    return `
        <article class="nav-card" data-link="${sub.link}">
          <h3>${sub.title}</h3>
          <br>
          <p>${sub.excerpt}</p>
          <div class="tags">
            ${sub.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </article>
      `;
  }

  setupContentLinks() {
    document.querySelectorAll("[data-page]").forEach((link) => {
      link.addEventListener("click", (e) => this.loadContent(e));
    });
  }

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
              <p class="hero-subtitle">실시간으로 업데이트되는 공간입니다.</p>
              <div class="cta-buttons">
                <button class="neon-box" data-page="games">
                  <i class="fas fa-gamepad"></i>
                  게임 즐기기
                </button>
                <button class="neon-box" data-page="posts">
                  <i class="fas fa-eye"></i>
                  실시간 업데이트 되는 블로그 둘러보기
                </button>
                <button class="neon-box">
                  <i class="fab fa-chrome"></i>
                  크롬 접속 권장
                </button>
              </div>
            </div>
          </section>
  
          <section class="features-grid">
            <article class="neon-card">
              <div class="feature-icon" style="background: ${getComputedStyle(
                document.documentElement
              ).getPropertyValue("--primary")}">
                <i class="fas fa-code" ></i>
              </div>
              <h3>최신 개발 트렌드</h3>
              <p>웹/앱 개발의 최신 기술과 팁을 공유합니다</p>
            </article>
  
            <article class="neon-card">
              <div class="feature-icon" style="background: var(--secondary)">
                <i class="fas fa-gamepad"></i>
              </div>
              <h3>인터랙티브 게임</h3>
              <p>직접 제작한 재미있는 웹 게임들을 만나보세요</p>
            </article>
  
            <article class="neon-card">
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
              <h2>🚧 공사중입니다 🚧</h2>
              <br>
              <p>⚠️ 블로그 개발이 아직 "대기중"입니다. ⚠️</p>
              <div class="skills">
                <div class="skill-item">
                  <h3>진행률 <span class="progress">10%</span></h3>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: 10%;"></div>
                  </div>
                  <p>다른 페이지 작업 중입니다. . . </p>
                </div>
              </div>
            </section>
            <div class="posts-grid">
              ${this.posts.map((post) => this.createSubHTML(post)).join("")}
            </div>
          `;
        this.setupNavLinks();
        break;

      case "games":
        mainContent.innerHTML = `
            <div class="subs-grid">
              ${this.games.map((game) => this.createSubHTML(game)).join("")}
            </div>
          `;
        this.setupNavLinks();
        break;
      default:
        mainContent.innerHTML = `<p>페이지를 찾을 수 없습니다.</p>`;
    }
  }
}
