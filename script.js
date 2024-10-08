const menuIcon = document.getElementById('menu-icon');
const mobileNavLinks = document.getElementById('mobile-nav-links');

menuIcon.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('show');
});
