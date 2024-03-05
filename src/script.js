// tombol ke atas
// navbar fixed
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const navbarFixed = header.offsetTop;
    const toTop = document.querySelector('#to-top');
    if (window.pageYOffset > navbarFixed) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
    }
});

// scrolll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // remove toggle and navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');
humberger.addEventListener('click', function () {
    humberger.classList.toggle('active');
    navMenu.classList.toggle('hidden');
});

// tombol dark mode
const changeColorButton = document.querySelector('#dark-toggle');
changeColorButton.addEventListener('click', function () {
    alert('Maaf website ini hanya tersedia dark mode.');
});

// oncopy
document.oncopy = function () {
    alert('hayo habis ngopy apa?');
};