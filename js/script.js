const burgerOpen = document.querySelector('.header__menu-icon');
const burgerClose = document.querySelector('.menu-icon__mobile');
const headerMenu = document.querySelector('.header__menu');

burgerOpen.addEventListener("click", burgerClick);
burgerClose.addEventListener("click", burgerClick);

function burgerClick() {
   const p = event.targer;
   headerMenu.classList.toggle("_active");
   document.body.classList.toggle("_lock");
}