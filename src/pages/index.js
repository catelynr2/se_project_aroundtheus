import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import Popup from "../components/Popup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { cardListSelector, configObj } from "../utils/constants.js";
// import { openModal } from "../utils/utils.js";
// import { closePopUp } from "../utils/utils.js";
import "./index.css";
import { initialCards } from "../utils/constants.js";
// import { modal } from "../utils/constants.js";
import { profileEditButton } from "../utils/constants.js";
// import { profileEditModal } from "../utils/constants.js";
// import { editModalCloseButton } from "../utils/constants.js";
// import { profileTitle } from "../utils/constants.js";
// import { profileDescription } from "../utils/constants.js";
// import { profileTitleInput } from "../utils/constants.js";
// import { profileDescriptionInput } from "../utils/constants.js";
// import { profileEditForm } from "../utils/constants.js";
import { addNewCardButton } from "../utils/constants.js";
// import { addCardTitleInput } from "../utils/constants.js";
// import { addCardUrlInput } from "../utils/constants.js";
// import { addNewCardModal } from "../utils/constants.js";
// import { addCardModalCloseButton } from "../utils/constants.js";
// import { addNewCardSaveButton } from "../utils/constants.js";
// import { addCardForm } from "../utils/constants.js";
import { cardTitleInput } from "../utils/constants.js";
import { cardUrlInput } from "../utils/constants.js";
// import { previewImageModal } from "../utils/constants.js";
// import { previewImageCloseButton } from "../utils/constants.js";
// import { cardListElement } from "../utils/constants.js";
import UserInfo from "../components/UserInfo.js";
// import { cardTemplate } from "../utils/constants.js";
// import { renderCard } from "../utils/utils.js";

const handleCardClick = (name, link) => {
  previewImageModal.open(name, link);
};

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleCardClick);
  // const cardElement = card.generateDefaultCard();
  // cardListElement.prepend(cardElement);
  cardList.addItem(card.generateDefaultCard());
}

const cardList = new Section(
  {
    renderer: renderCard,
    // (item) => {
    // const card = new Card(item, "#card-template");

    //  const cardElement = card.generateDefaultCard();

    // cardList.addItem(cardElement);
    //},
  },
  cardListSelector
);

cardList.renderItems(initialCards);

// const openPopup = new Popup(".modal", (input) => {
//   const cardItem = new Card(input, "#card-template");
//   const cardItemElement = cardItem.generateDefaultCard();
//   cardsList.addItem(cardItemElement);
// });

const modalTest = document.querySelector(".modal");
// console.log(modalTest);
// openPopup.open();

// openPopup.close();

// Event Handlers
function handleProfileEditSubmit(inputs) {
  // profileTitle.textContent = profileTitleInput.value;
  // profileDescription.textContent = profileDescriptionInput.value;
  userInfo.setUserInfo(inputs);
}

function handleNewCardSubmit(inputs) {
  renderCard(inputs);
}

const addNewCardModal = new PopupWithForm(
  "#add-new-card-modal",
  handleNewCardSubmit
);
addNewCardModal.setEventListeners();

const userInfo = new UserInfo(".profile__title", ".profile__description");

const profileEditModal = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
profileEditModal.setEventListeners();

const previewImageModal = new PopupWithImage(".modal_preview-image");
previewImageModal.setEventListeners();

// handleCardClick(cardData) {
//   const imageModal = document.querySelector("#preview-image-modal");
//   const imageModalImage = document.querySelector(".modal__large-view-image");
//   imageModalImage.src = this._link;
//   imageModalImage.alt = this._name;
//   const imageModalText = document.querySelector(".modal__preview-image-name");
//   imageModalText.textContent = this._name;

//   openModal(imageModal);
// }

// Event Listeners
profileEditButton.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  document.querySelector(".modal__input_type_username").value = info.name;
  document.querySelector(".modal__input_type_userjob").value = info.job;
  new Popup("#profile-edit-modal").open();
});

addNewCardButton.addEventListener("click", () => {
  new Popup("#add-new-card-modal").open();
});

// editModalCloseButton.addEventListener("click", () => {
//   new Popup("#profile-edit-modal").close();
// });
// addCardModalCloseButton.addEventListener("click", () => {
//   new Popup("#add-new-card-modal").close();
// });
// previewImageCloseButton.addEventListener("click", () =>
//   previewImageModal.close()
// );

// profileEditForm.addEventListener("submit", handleProfileEditSubmit);
// addCardForm.addEventListener("submit", handleNewCardSubmit);

// initialCards.forEach((cardData) => renderCard(cardData, cardListElement));

const profileEditFormValidator = new FormValidator(
  configObj,
  document.forms["profile-edit-form"]
);
profileEditFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(
  configObj,
  document.forms["add-card-form"]
);
addCardFormValidator.enableValidation();
