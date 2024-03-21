(function () {
  window.__debugRebrand = undefined;
  document.documentElement.classList.remove("brand-2024-debug");
  document.cookie =
    "sf-mode-theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  sessionStorage.removeItem("sf-mode-theme");
  document.querySelectorAll('[class^="theme--"]').forEach((el) => {
    el.className = "";
  });
})();
