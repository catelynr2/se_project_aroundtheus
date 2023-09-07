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
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "9a60ea94-9d34-4f3e-83e3-c406b7fc4ac5",
    "Content-Type": "application/json",
  },
});

const deleteCardModal = new PopupWithConfirmation({
  popupSelector: ".modal_delete-card",
});
deleteCardModal.setEventListeners();

const handleCardClick = (name, link) => {
  previewImageModal.open(name, link);
};

const handleDeleteIcon = (card) => {
  deleteCardModal.open();
  deleteCardModal.setAction(() => {
    deleteCardModal.renderLoading(true);
    api
      .deleteCard(card.getId())
      .then(() => {
        card.handleDeleteCard();
        deleteCardModal.close();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        deleteCardModal.renderLoading(false);
      });
  });
};

const handleLikeClick = (card) => {
  api
    .likeCard(card.getId())
    .then((res) => {
      card.setLike(res.isLiked);
    })
    .catch((err) => {
      console.error(err);
    });
};

const handleUnlikeClick = (card) => {
  api
    .unlikeCard(card.getId())
    .then((res) => {
      card.setLike(res.isLiked);
    })
    .catch((err) => {
      console.error(err);
    });
};

function renderCard(cardData) {
  const card = new Card({
    data: cardData,
    cardSelector: "#card-template",
    handleCardClick: handleCardClick,
    handleDeleteIcon: handleDeleteIcon,
    handleLikeClick: handleLikeClick,
    handleUnlikeClick: handleUnlikeClick,
    confirmPopup: deleteCardModal,
  });
  cardList.addItem(card.generateDefaultCard());
}

const cardList = new Section(
  {
    renderer: renderCard,
  },
  cardListSelector
);

const userInfo = new UserInfo(
  ".profile__title",
  ".profile__description",
  ".profile__avatar"
);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    // take  user data from api and render to profile section
    userInfo.setUserInfo(userData);
    userInfo.setAvatar(userData);
    // take initial cards from api and render to card section
    cardList.renderItems(cards.reverse());
  })
  .catch((err) => {
    console.error(err);
  });

const editAvatarModal = new PopupWithForm("#profile-edit-avatar", (link) => {
  editAvatarModal.renderLoading(true);
  api
    .updateAvatar(link)
    .then((res) => {
      userInfo.setAvatar(res);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      editAvatarModal.renderLoading(false);
    });
});
editAvatarModal.setEventListeners();

document
  .querySelector(".profile__avatar-overlay")
  .addEventListener("click", () => {
    editAvatarFormValidator.disableButton();
    editAvatarModal.open();
  });

// Event Handlers
function handleProfileEditSubmit(inputs) {
  profileEditModal.renderLoading(true);
  api
    .updateUserInfo(inputs)
    .then((res) => {
      userInfo.setUserInfo(res);
      userInfo.setAvatar(res);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      profileEditModal.renderLoading(false);
    });
}

function handleNewCardSubmit(inputs) {
  addNewCardModal.renderLoading(true);
  api
    .addCard(inputs)
    .then((res) => {
      renderCard(res);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      addNewCardModal.renderLoading(false);
    });
}

const addNewCardModal = new PopupWithForm(
  "#add-new-card-modal",
  handleNewCardSubmit
);
addNewCardModal.setEventListeners();

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

const editAvatarFormValidator = new FormValidator(
  configObj,
  document.forms["profile-edit-avatar"]
);
editAvatarFormValidator.enableValidation();
