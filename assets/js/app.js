// IO and animation
document.addEventListener('DOMContentLoaded', () => {
  // Simple IntersectionObserver for on-load animations
  const watch = document.querySelectorAll('[data-animate]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  watch.forEach(el => io.observe(el));

  // Example CMS hook: simulate menu fetch and render placeholder
  if (typeof window.fetchMenuFromCMS === 'function') {
    window.fetchMenuFromCMS().then(data => {
      // In a real app, render menu items here
    });
  }

  // Accessibility helpers (focus outline on tab navigation)
  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') document.documentElement.classList.add('user-tabbing');
  }, { once: true });
});
