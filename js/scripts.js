function resizeFallingLeaves() {
  const container = document.querySelector('.falling-leaves');
  container.style.height = document.body.scrollHeight + 'px';
}
window.addEventListener('resize', resizeFallingLeaves);
window.addEventListener('DOMContentLoaded', resizeFallingLeaves);
