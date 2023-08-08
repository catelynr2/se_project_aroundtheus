import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { configObj } from "../utils/constants.js";
import { openModal } from "../utils/utils.js";
import { closePopUp } from "../utils/utils.js";
import "./index.css";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// Elements
const modal = document.querySelectorAll(".modal");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const editModalCloseButton = profileEditModal.querySelector(
  "#modal-close-button"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addNewCardButton = document.querySelector(".profile__add-button");
const addCardTitleInput = document.querySelector("#add-card-title-input");
const addCardUrlInput = document.querySelector("#add-card-url-input");
const addNewCardModal = document.querySelector("#add-new-card-modal");
const addCardModalCloseButton = addNewCardModal.querySelector(
  "#add-card-close-button"
);
const addNewCardSaveButton = document.querySelector(
  "#add-new-card-save-button"
);
const addCardForm = addNewCardModal.querySelector(".modal__form");
const cardTitleInput = addCardForm.querySelector("#add-card-title-input");
const cardUrlInput = addCardForm.querySelector("#add-card-url-input");
const previewImageModal = document.querySelector("#preview-image-modal");
const previewImageCloseButton = document.querySelector(
  "#preview-image-close-button"
);
const cardListElement = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Functions
function fillProfileForm() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template");
  const cardElement = card.generateCard();
  cardListElement.prepend(cardElement);
}

// Event Handlers
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp(profileEditModal);
}

function handleNewCardSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListElement);
  addCardForm.reset();
  closePopUp(addNewCardModal);

  addCardFormValidator.resetButtonState();
}

// Event Listeners
profileEditButton.addEventListener("click", () => {
  openModal(profileEditModal);
  fillProfileForm();
});

addNewCardButton.addEventListener("click", () => openModal(addNewCardModal));

editModalCloseButton.addEventListener("click", () =>
  closePopUp(profileEditModal)
);
addCardModalCloseButton.addEventListener("click", () =>
  closePopUp(addNewCardModal)
);
previewImageCloseButton.addEventListener("click", () =>
  closePopUp(previewImageModal)
);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardForm.addEventListener("submit", handleNewCardSubmit);

initialCards.forEach((cardData) => renderCard(cardData, cardListElement));

const profileEditFormValidator = new FormValidator(configObj, profileEditForm);
profileEditFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(configObj, addCardForm);
addCardFormValidator.enableValidation();
