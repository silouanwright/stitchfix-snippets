// Debug
(function () {
  window.__debugRebrand = !window.__debugRebrand;
  if (window.__debugRebrand) {
    document.documentElement.classList.add("brand-2024-debug");
  } else {
    document.documentElement.classList.remove("brand-2024-debug");
  }
})();
