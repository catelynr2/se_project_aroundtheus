import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { configObj } from "../utils/constants.js";
import { openModal } from "../utils/utils.js";
import { closePopUp } from "../utils/utils.js";
import "./index.css";
import logoSrc from "../images/logo.svg";
// import yosemiteImage from "../images/yosemite-valley.png";
// import lakeLouiseImage from "../images/https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg";
// import baldMountainsImage from "../images/https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg";
// import latemarImage from "../images/https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg";
// import vanoiseImage from "../images/https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg";
// import lagoImage from "../images/https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg.jpg";

const yosemiteImage = new URL("../images/yosemete-valley.png", import.meta.url);
const lakeLouiseImage = new URL("../images/lake-louise.png", import.meta.url);
const baldMountainsImage = new URL(
  "../images/bald-mountains.png",
  import.meta.url
);
const latemarImage = new URL("../images/latemar.png", import.meta.url);
const vanoiseImage = new URL(
  "../images/vanoise-national-park.png",
  import.meta.url
);
const lagoImage = new URL("../images/lago-di-braies.png", import.meta.url);

const initialCards = [
  {
    name: "Yosemite Valley",
    link: yosemiteImage,
  },
  {
    name: "Lake Louise",
    link: lakeLouiseImage,
  },
  {
    name: "Bald Mountains",
    link: baldMountainsImage,
  },
  {
    name: "Latemar",
    link: latemarImage,
  },
  {
    name: "Vanoise National Park",
    link: vanoiseImage,
  },
  {
    name: "Lago di Braies",
    link: lagoImage,
  },
];

// Elements
const logoImage = document.getElementById("image-logo");
logoImage.src = logoSrc;
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
