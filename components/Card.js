export default class Card {
  constructor(data, cardSelector) {
    this._name = cardLoop.name;
    this._link = cardLoop.link;
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
    this._cardElement.querySelector(".card__like-button").addEventListener("click", () => {
        this._handleLikeIcon();
    });
    //".card__delete-button"
   this._cardElement.querySelector(".card__delete-button").addEventListener("click", () => {
    this._handleDeleteCard();
   });
    // this._element.querySelector(".card__text").addEventListener("click", () => {
    //       this._handleMessageClick();
    //     });
  }

  _handleLikeIcon() {
    this._cardElement.querySelector(".card__like-button").classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
  }

    generateCard {
      //get the card
      this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
      //set event listeners
      this._setEventListeners() {};
      //return the card
      this._element = this._getTemplate();

    //   // Add data
    //   this._element.querySelector(".card__avatar").src = this._image;
    //   this._element.querySelector(".card__paragraph").textContent = this._text;

    // Return the element
      return this._cardElement;
    }
}
