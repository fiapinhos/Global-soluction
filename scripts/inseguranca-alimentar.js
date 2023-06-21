const moderatePercentContainer = document.querySelector(".moderate");
const covaPercentContainer = document.querySelector(".cova");
const covaPercent = document.querySelector(".inside-1");
const moderatePercent = document.querySelector(".inside-2");
const select = document.querySelector("#select");

const p1 = document.querySelector("#value-1");
const p2 = document.querySelector("#value-2");

const widthModerate = moderatePercentContainer.clientWidth;
const widthCova = moderatePercentContainer.clientWidth;

const values1 = {
  africa: 0.579,
  "america-latina-e-caribe": 0.406,
  asia: 0.24,
  oceania: 0.13,
  "america-do-norte-e-europa": 0.08,
};
const values2 = {
  africa: 0.234,
  "america-latina-e-caribe": 0.142,
  asia: 0.105,
  oceania: 0.045,
  "america-do-norte-e-europa": 0.015,
};

function setPercent(e) {
  const totalWidth1 = moderatePercentContainer.clientWidth;
  const totalWidth2 = covaPercentContainer.clientWidth;

  const percent1 = values1[e] * totalWidth1;
  const percent2 = values2[e] * totalWidth2;

  p1.innerText = ` ${(values1[e] * 100).toFixed(2)}%`;
  p2.innerText = `${(values2[e] * 100).toFixed(2)}%`;

  covaPercent.style.width = `${percent1}px`;
  moderatePercent.style.width = `${percent2}px`;
}

select.addEventListener("change", (e) => {
  setPercent(e.target.value);
});

setPercent("africa");
