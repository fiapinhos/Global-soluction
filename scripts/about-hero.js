const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const heading = document.querySelector(".current-text");
const timer = document.querySelector(".timer");

const texts = [
  "Somos uma Empresa que da as melhores soluções aos alimentos que não serão vendidos, seja pela estética ou próximo ao prazo de validade.",
  "De forma ágil e eficiente, trazemos aos supermercados a inovação e o investimento ao não desperdício de alimentos.",
  "Pra tal fim tivemos uma ideia de criar uma plataforma para as lojas registrarem estes produtos e separa-los para assim focarmos em ajudar a solucionar a fome no mundo",
  "Conectamos os alimentos do seu supermercado as ONG’S que fazem o trabalho de distribuição de alimentos as pessoas mais necessitadas",
];

const buttons = [btn1, btn2, btn3, btn4];

let currentIndex = 0;

setInterval(() => {
  buttons[currentIndex].classList.remove("active");
  if (currentIndex == 3) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  heading.innerText = texts[currentIndex];

  buttons[currentIndex].classList.add("active");
}, 4000);
