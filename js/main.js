/** burguer menu */

const menuBtn = document.querySelector('.menu-btn');
const navUL = document.querySelector('#nav-ul');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    navUL.classList.toggle('show');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    navUL.classList.toggle('show');
  }
});

/** burguer menu */

/** carrossel */

let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.navegacao-btn');
let currentSlide = 1;

// navegação manual do carrossel

let manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
};

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    manualNav(i);
    currentSlide = i;
  });
});

// javascript for image slider autoplay navigation

let repeat = function (activeClass) {
  let active = document.getElementsByClassName('active');
  let i = 1;

  let repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;
      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.lenght) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();
/** carrossel */
