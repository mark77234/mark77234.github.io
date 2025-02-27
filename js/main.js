import { ThemeManager } from "./theme-manager.js";
import { NavigationManager } from "./navigation-manager.js";
import { ContentLoader } from "./content-loader.js";
import { initTagCloud } from "./utilities.js";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  new ThemeManager();

  new NavigationManager();

  new ContentLoader();

  initTagCloud();
}
