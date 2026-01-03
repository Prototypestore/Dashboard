export function applyTheme(config) {
  const root = document.documentElement;

  root.style.setProperty("--bg-color", config.background_color);
  root.style.setProperty("--surface-color", config.surface_color);
  root.style.setProperty("--text-color", config.text_color);
  root.style.setProperty("--primary-color", config.primary_action_color);
  root.style.setProperty("--secondary-color", config.secondary_action_color);
}
