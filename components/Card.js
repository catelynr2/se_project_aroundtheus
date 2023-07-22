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
    this._likeButton = this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    //".card__delete-button"
    this._cardElement = this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    //open preview image
    const previewImageModal = document.querySelector("#preview-image-modal");
    const previewImageCloseButton = document.querySelector(
      "#preview-image-close-button"
    );
    const cardImageEl = document.querySelector(".modal__large-view-image");
    const cardTitleEl = document.querySelector(".modal__preview-image-name");

    this._cardImageEl
      .querySelector(".modal__large-view-image")
      .addEventListener("click", () => {
        this._openModal();
      });
    // this._cardTitleEl = this._element.querySelector(".modal__preview-image-name");
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

  _getCardElement(data) {
    this._element = this._CardElement();
  }

  generateCard() {
    //get the card
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    //set event listeners
    this._setEventListeners();
    //return the card
    this._element = this._getTemplate();
    // Return the element
    return this._cardElement;
  }
}
