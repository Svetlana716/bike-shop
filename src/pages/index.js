import {
  menu,
  burgerBtn,
  burgerDashes,
  sliderList,
  sliderPrevBtn,
  sliderNextBtn,
} from "../utils/constants";

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("menu_open");
  burgerDashes.forEach((burgerDash) => {
    burgerDash.classList.toggle("header__burger-dash-crossed");
  });
});

/* slider */
let offset = 0; //смещение от левого края

sliderNextBtn.addEventListener("click", () => {
  offset = offset + 690;
  if (offset > 1380) {
    offset = 0;
  }
  sliderList.style.left = -offset + "px";
});

sliderPrevBtn.addEventListener("click", () => {
  offset = offset - 690;
  if (offset < 0) {
    offset = 1380;
  }
  sliderList.style.left = -offset + "px";
});
