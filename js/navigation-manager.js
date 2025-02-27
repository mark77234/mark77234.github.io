export class NavigationManager {
  constructor() {
    this.nav = document.querySelector(".nav");
    this.hamburger = document.querySelector(".hamburger");
    this.init();
  }

  init() {
    this.hamburger.addEventListener("click", () => this.toggleMenu());
    document.querySelectorAll(".nav a").forEach((link) => {
      link.addEventListener("click", (e) => this.handleNavClick(e));
    });
  }

  toggleMenu() {
    this.hamburger.classList.toggle("active");
    this.nav.classList.toggle("active");
  }

  handleNavClick(e) {
    e.preventDefault();
    this.toggleMenu();
    const targetPage = e.target.dataset.page;
  }
}
