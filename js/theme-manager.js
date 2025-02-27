export class ThemeManager {
  constructor() {
    this.themeToggle = document.querySelector(".theme-toggle");
    this.currentTheme = localStorage.getItem("theme");
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
