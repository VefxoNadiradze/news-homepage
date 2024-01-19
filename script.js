const burgerBtn = document.querySelector(".burgerBtn");
const closeBtn = document.querySelector(".closeBtn");
const ul = document.querySelector(".ul");
let overlay = document.querySelector(".overlay");

burgerBtn.addEventListener("click", () => {
  ul.classList.add("activeUl");
  setTimeout(() => {
    overlay.classList.add("overlayActive");
  }, 100);
});

closeBtn.addEventListener("click", () => {
  ul.classList.remove("activeUl");
  overlay.classList.remove("overlayActive");
});

overlay.addEventListener("click", () => {
  ul.classList.remove("activeUl");
  overlay.classList.remove("overlayActive");
});
