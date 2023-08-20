import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import {
  cardListSelector,
  configObj,
  profileEditButton,
  initialCards,
  addNewCardButton,
  addNewCardSaveButton,
} from "../utils/constants.js";
import "./index.css";
import UserInfo from "../components/UserInfo.js";

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
  },
  cardListSelector
);

cardList.renderItems(initialCards);

// Event Handlers
function handleProfileEditSubmit(inputs) {
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

// Event Listeners
profileEditButton.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  document.querySelector(".modal__input_type_username").value = info.name;
  document.querySelector(".modal__input_type_userjob").value = info.job;
  profileEditFormValidator.disableButton();
  profileEditModal.open();
});

addNewCardButton.addEventListener("click", () => {
  addCardFormValidator.resetButtonState();
  addNewCardModal.open();
});

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
