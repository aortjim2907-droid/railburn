const navIcon = document.getElementById('burger');
const menuMobile = document.getElementById('menu-mobile');
const menuLinks = document.querySelectorAll('.menu-links a');
const logo = this.document.getElementById('logo');

window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        logo.classList.add('scrolled');
    } else {
        logo.classList.remove('scrolled');
    }
});

navIcon.addEventListener('click', function () {
    navIcon.classList.toggle('active');
    menuMobile.classList.toggle('open');
    if (menuMobile.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navIcon.classList.remove('active');
        menuMobile.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});