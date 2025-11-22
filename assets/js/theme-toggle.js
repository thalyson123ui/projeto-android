// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function applyTheme(dark) {
    if (dark) {
      root.setAttribute('data-theme', 'dark');
      btn.textContent = '☀️';
      btn.setAttribute('aria-pressed', 'true');
    } else {
      root.removeAttribute('data-theme');
      btn.textContent = '🌙';
      btn.setAttribute('aria-pressed', 'false');
    }
  }

  const saved = localStorage.getItem('theme') === 'dark';
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    applyTheme(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  });
});
// ...existing code...