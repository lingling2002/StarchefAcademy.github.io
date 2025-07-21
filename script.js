// Toggle responsive nav menu
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

// Optional: Auto-close mobile nav when a link is clicked
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('show');
  });
});
