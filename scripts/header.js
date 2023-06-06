const openBtn = document.querySelector("#open-menu");
const closeBtn = document.querySelector("#close-menu");
const fullScreenMenu = document.querySelector(".full-screen-menu");

function initHeader() {
  openBtn.addEventListener("click", () => {
    fullScreenMenu.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    fullScreenMenu.classList.toggle("active");
  });
}

initHeader();
