document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.govuk-accordion__section-button').forEach(btn => {
    btn.addEventListener('click', function() {
      const section = btn.closest('.govuk-accordion__section');
      const content = section.querySelector('.govuk-accordion__section-content');
      if (content.style.display === 'block') {
        content.style.display = 'none';
        btn.classList.remove('active');
      } else {
        content.style.display = 'block';
        btn.classList.add('active');
      }
    });
  });
});