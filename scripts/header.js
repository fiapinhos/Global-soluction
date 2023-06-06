const openBtn = document.querySelector("#open-menu");
const closeBtn = document.querySelector("#close-menu");
const fullScreenMenu = document.querySelector(".full-screen-menu");
const links = document.querySelectorAll(".navigation a");

const tl = gsap.timeline({ paused: true });

function initHeader() {
  tl.to(fullScreenMenu, {
    opacity: 1,
    duration: 0.2,
  })
    .to(
      links[0],
      {
        transform: "translateX(0%)",
        opacity: 1,
        duration: 0.3,
      },
      "<+=80%"
    )
    .to(
      links[1],
      {
        transform: "translateX(0%)",
        opacity: 1,
        duration: 0.4,
      },
      "<+=60%"
    )
    .to(
      links[2],
      {
        transform: "translateX(0%)",
        opacity: 1,
        duration: 0.4,
      },
      "<+=60%"
    )
    .to(
      links[3],
      {
        transform: "translateX(0%)",
        opacity: 1,
        duration: 0.4,
      },
      "<+=60%"
    )
    .to(
      links[4],
      {
        transform: "translateX(0%)",
        opacity: 1,
        duration: 0.4,
      },
      "<+=60%"
    )
    .reverse();

  openBtn.addEventListener("click", () => {
    fullScreenMenu.classList.toggle("active");
    tl.reversed(!tl.reversed());
  });

  closeBtn.addEventListener("click", () => {
    fullScreenMenu.classList.toggle("active");
    tl.reversed(!tl.reversed());
  });
}

initHeader();
