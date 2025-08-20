document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  function updateIcon() {
    if(document.documentElement.classList.contains('dark-mode')) {
      btn.textContent = '\u263E'; // ☾
    } else {
      btn.textContent = '\u2600\uFE0F'; // ☀️
    }
  }
  btn.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark-mode');
    if(document.documentElement.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    updateIcon();
  });
  if(localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }
  updateIcon();
});
