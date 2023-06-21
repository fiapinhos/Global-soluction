/* FUNÇÃO PARA INDICAR O PROGRESSO DE SCROLL REALIZADO */

function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};
