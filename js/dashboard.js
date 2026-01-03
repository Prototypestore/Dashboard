import { defaultConfig } from "./config.js";
import { renderDashboard } from "./render.js";

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: renderDashboard
  });
} else {
  // Fallback for local testing
  renderDashboard(defaultConfig);
}
