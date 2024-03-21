// Theme: Brand Legacy
(function () {
  const theme = "brand-legacy";
  window.__debugRebrand = undefined;
  document.documentElement.classList.remove("brand-2024-debug");
  document.querySelectorAll('[class^="theme--"]').forEach((el) => {
    el.className = "";
    el.classList.add(`theme--${theme}`);
  });
  document.cookie = `sf-mode-theme=${theme}; expires=${new Date(
    new Date().getTime() + 1000 * 60 * 60 * 24 * 365
  ).toGMTString()}; path=/`;
  sessionStorage.setItem("sf-mode-theme", theme);
})();
