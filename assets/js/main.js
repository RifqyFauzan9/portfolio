// NAVIGATION
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// BLUR HEADER
const blurHeader = () => {
  const header = document.getElementById('header');
  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: false,
});

// Common elements
sr.reveal('.section__title', {
  delay: 300,
  origin: 'top'
});

// Home section
sr.reveal('.home__name', {
  delay: 400,
  origin: 'left',
  distance: '80px'
});

sr.reveal('.home__profession', {
  delay: 500,
  origin: 'right',
  distance: '80px'
});

// Work section
sr.reveal('.work__card', {
  interval: 200,
  origin: 'bottom'
});

// Info section
sr.reveal('.about__img', {
  origin: 'left',
  distance: '60px'
});

sr.reveal('.about__content', {
  origin: 'right',
  distance: '60px'
});

// Services section
sr.reveal('.services__card', {
  interval: 200,
  origin: 'bottom'
});

// Contact section
sr.reveal('.contact__form', {
  origin: 'left',
  distance: '60px'
});

sr.reveal('.contact__social', {
  origin: 'right',
  distance: '60px'
});

// SCROLL UP
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

// EMAIL JS
// const contactForm = document.getElementById('contact-form'),
//       contactMessage = document.getElementById('contact-message');

// const sendEmail = (e) => {
//   e.preventDefault();
  
//   emailjs.sendForm('service_l9buiso', 'template_stz3x4f', '#contact-form', 'LedVEW-iymax6egIi')
//     .then(() => {
//       contactMessage.textContent = 'Message sent successfully ✅';
//       setTimeout(() => {
//         contactMessage.textContent = '';
//       }, 5000);
//       contactForm.reset();
//     }, () => {
//       contactMessage.textContent = 'Error sending message 😞';
//     });
// }

// contactForm.addEventListener('submit', sendEmail);