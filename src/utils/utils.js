import Card from "../components/Card.js";
import { cardListElement } from "./constants";

const modal = document.querySelectorAll(".modal");

// export function renderCard(cardData) {
//   const card = new Card(cardData, "#card-template");
//   const cardElement = card.generateCard();
//   cardListElement.prepend(cardElement);
// }

// export function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", handleEscapeKeyDown);
// }

// export function closePopUp(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", handleEscapeKeyDown);
// }

// export function handleEscapeKeyDown(evt) {
//   if (evt.key === "Escape") {
//     const openedModal = document.querySelector(".modal_opened");
//     closePopUp(openedModal);
//   }
// }

// modal.forEach((modalElement) => {
//   modalElement.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("modal")) {
//       closePopUp(modalElement);
//     }
//   });
// });
