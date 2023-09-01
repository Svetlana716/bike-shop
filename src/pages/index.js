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
