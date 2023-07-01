// Active Menu Button 
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('bx-x');
  menuBar.classList.toggle('active');
};

// Let's remove menu-bar on scroll
window.onscroll = () => {
  menuBtn.classList.remove('bx-x');
  menuBar.classList.remove('active');
};

//scroll reveal
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay : 200,

});
ScrollReveal().reveal('.home-bio h1 .about-resume', { origin: 'left' });
ScrollReveal().reveal('.home-bio p', { origin: 'right'});
ScrollReveal().reveal('.home-bio, heading', { origin: 'top'});
ScrollReveal().reveal('.profile-pic, .about-items, .skills-items, .projects-items, .form', { origin: 'bottom'});