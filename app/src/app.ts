import { NegotiationController } from "./controllers/negotiation-controller.js";

const controller = new NegotiationController();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.add();
  });
} else {
  throw Error("Não foi possível rodar o app. Verifique se o form existe");
}

const buttonImport = document.querySelector("#button-import");
if (buttonImport) {
  buttonImport.addEventListener("click", () => {
    controller.importData();
  });
} else {
  throw Error("Botão não foi encontrado");
}
