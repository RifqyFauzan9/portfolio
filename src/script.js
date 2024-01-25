// tombol ke atas
// navbar fixed
window.onscroll = function () {
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
};

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
})