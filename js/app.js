//modal
const btn = document.querySelector("#btn");
const wrap = document.querySelector(".wrapper__modal");
const btnClose = document.querySelector(".btn__close");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", () => {
  wrap.classList.add("active");
});

const closeModal = () => {
  wrap.classList.remove("active");
};
overlay.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

//Mobile menu
const menuBtn = document.querySelector(".menu__btn-mobile");
const menu = document.querySelector(".menu__item");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

//Swiper
