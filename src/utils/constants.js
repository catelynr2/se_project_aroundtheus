export const initialCards = [
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
export const modal = document.querySelectorAll(".modal");
export const profileEditButton = document.querySelector("#profile-edit-button");
// export const profileEditModal = document.querySelector("#profile-edit-modal");
// export const editModalCloseButton = profileEditModal.querySelector(
//  "#modal-close-button"
// );
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
// export const profileEditForm = profileEditModal.querySelector(".modal__form");
export const addNewCardButton = document.querySelector(".profile__add-button");
export const addCardTitleInput = document.querySelector(
  "#add-card-title-input"
);
export const addCardUrlInput = document.querySelector("#add-card-url-input");
// export const addCardModalCloseButton = addNewCardModal.querySelector(
// "#add-card-close-button"
// );
export const addNewCardSaveButton = document.querySelector(
  "#add-new-card-save-button"
);
// export const addCardForm = addNewCardModal.querySelector(".modal__form");
// export const cardTitleInput = addCardForm.querySelector(
//   "#add-card-title-input"
// );
// export const cardUrlInput = addCardForm.querySelector("#add-card-url-input");
// export const previewImageModal = document.querySelector("#preview-image-modal");
export const previewImageCloseButton = document.querySelector(
  "#preview-image-close-button"
);
export const cardListElement = document.querySelector(".cards__list");
export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

//Selectors
export const cardListSelector = ".cards__list";

export const configObj = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
