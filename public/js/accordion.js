document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      let content = this.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});
