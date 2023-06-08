/* FUNÇÕES PARA VALIDAR SE O E-MAIL DIGITADO É VÁLIDO E DAR UM ALERT CONFIRMANDO O ENVIO */

const sendButton = document.querySelector(".send-button");
const emailInput = document.querySelector("#email");

function init() {
  sendButton.addEventListener("click", () => {
    alert("Obrigado por assinar nossa newsletter!");
  });

  emailInput.addEventListener("input", () => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)
    ) {
      sendButton.classList.remove("disabled");
      sendButton.disabled = false;
    } else {
      sendButton.disabled = true;
      sendButton.classList.add("disabled");
    }
  });
}

init();
