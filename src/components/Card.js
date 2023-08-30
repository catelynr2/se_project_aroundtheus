export default class Card {
  constructor({
    data,
    cardSelector,
    handleCardClick,
    handleDeleteIcon,
    confirmPopup,
    api,
  }) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIcon = handleDeleteIcon;
    this._confirmPopup = confirmPopup;
    this._api = api;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    //".card__like-button"
    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });
    //".card__delete-button"
    this._deleteButton = this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteIcon(this, this._id);
      });

    //open preview image
    this._cardImageEl.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");

    if (this._cardElement.querySelector(".card__like-button_active")) {
      this._api.likeCard(this._id).catch((err) => {
        console.error(err);
      });
    } else {
      this._api.unlikeCard(this._id).catch((err) => {
        console.error(err);
      });
    }
  }

  _setLike() {
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    }
  }

  handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _getCardElement() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  generateDefaultCard() {
    //get the card
    this._cardElement = this._getCardElement();
    //set event listeners
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;

    this._cardTitleEl = this._cardElement.querySelector(".card__title");
    this._cardTitleEl.textContent = this._name;

    this._likeButton = this._cardElement.querySelector(".card__like-button");

    this._setEventListeners();
    this._setLike();
    // Return the element
    return this._cardElement;
  }
}
