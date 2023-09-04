import '../pages/index.css';

/* burger-menu */
const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.header__burger-btn');
const burgerDashes = document.querySelectorAll('.header__burger-dash');

burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('menu_open');
  burgerDashes.forEach((burgerDash) => {
    burgerDash.classList.toggle('header__burger-dash-crossed');
  })
})

/* slider */
let offset = 0; //смещение от левого края
const sliderList = document.querySelector('.slider__list');
const sliderPrevBtn = document.querySelector('.slider__btn_type_prev');
const sliderNextBtn = document.querySelector('.slider__btn_type_next');

sliderNextBtn.addEventListener('click', () => {
  offset = offset + 690;
  if (offset > 1380) {
    offset = 0;
  }
  sliderList.style.left = -offset + 'px';
});

sliderPrevBtn.addEventListener('click', () => {
  offset = offset - 690;
  if (offset < 0) {
    offset = 1380;
  }
  sliderList.style.left = -offset + 'px';
});
