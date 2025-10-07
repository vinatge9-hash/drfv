// Placeholder ordering logic for future integration
function initOrderingWidget() {
  const btns = document.querySelectorAll('.order-btn');
  btns.forEach(b => b.addEventListener('click', () => alert('Ordering flow would start here')));
}

document.addEventListener('DOMContentLoaded', initOrderingWidget);
