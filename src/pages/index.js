// import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import { configObj } from "../utils/constants.js";
import { openModal } from "../utils/utils.js";
import { closePopUp } from "../utils/utils.js";
import "./index.css";
import { initialCards } from "../utils/constants.js";
// import { modal } from "../utils/constants.js";
import { profileEditButton } from "../utils/constants.js";
import { profileEditModal } from "../utils/constants.js";
import { editModalCloseButton } from "../utils/constants.js";
import { profileTitle } from "../utils/constants.js";
import { profileDescription } from "../utils/constants.js";
import { profileTitleInput } from "../utils/constants.js";
import { profileDescriptionInput } from "../utils/constants.js";
import { profileEditForm } from "../utils/constants.js";
import { addNewCardButton } from "../utils/constants.js";
// import { addCardTitleInput } from "../utils/constants.js";
// import { addCardUrlInput } from "../utils/constants.js";
import { addNewCardModal } from "../utils/constants.js";
import { addCardModalCloseButton } from "../utils/constants.js";
// import { addNewCardSaveButton } from "../utils/constants.js";
import { addCardForm } from "../utils/constants.js";
import { cardTitleInput } from "../utils/constants.js";
import { cardUrlInput } from "../utils/constants.js";
import { previewImageModal } from "../utils/constants.js";
import { previewImageCloseButton } from "../utils/constants.js";
import { cardListElement } from "../utils/constants.js";
// import { cardTemplate } from "../utils/constants.js";
// import { renderCard } from "../utils/utils.js";

const cardsList = new Section(
  {
    data: initialCards,
    renderer: (cardItem) => {
      const card = cardItem.isOwner
        ? new UserCard(cardItem, ".card-template_type_user")
        : new DefaultCard(cardItem, ".card-template_type_default");

      const cardElement = card.generateCard();

      cardsList.setItem(cardElement);
    },
  },
  cardListSection
);

cardsList.renderItems();

const newCardPopup = new PopupWithForm("#add-new-card-modal", () => {});
newCardPopup.open();

newCardPopup.close();

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

// function renderCard(cardData) {
//   const card = new Card(cardData, "#card-template");
//   const cardElement = card.generateCard();
//   cardListElement.prepend(cardElement);
// }

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
