import { openModal } from "../utils/utils.js";

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    //".card__like-button"
    this._likeButton = this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    //".card__delete-button"
    this._deleteButton = this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    //open preview image
    const previewImageModal = document.querySelector("#preview-image-modal");
    const previewImageCloseButton = document.querySelector(
      "#preview-image-close-button"
    );

    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardImageEl.src = this._link;

    this._cardImageEl.addEventListener("click", () => {
      const imageModal = document.querySelector("#preview-image-modal");
      const imageModalImage = document.querySelector(
        ".modal__large-view-image"
      );
      imageModalImage.src = this._link;
      const imageModalText = document.querySelector(
        ".modal__preview-image-name"
      );
      imageModalText.textContent = this._name;

      openModal(imageModal);
    });

    this._cardTitleEl = this._cardElement.querySelector(".card__title");
    this._cardTitleEl.textContent = this._name;

    // this._cardTitleEl.addEventListener("click", () => {

    // openModal(imageModalText);
    // });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _getCardElement() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  generateCard() {
    //get the card
    this._cardElement = this._getCardElement();
    //set event listeners
    this._setEventListeners();
    // Return the element
    return this._cardElement;
  }
}
