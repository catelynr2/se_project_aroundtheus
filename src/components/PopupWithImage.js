import Popup from "./Popup.js";
import Card from "./Card.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupImage = this._popupElement.querySelector("#preview-image-modal");
  }

  open() {
    this._popupImage.querySelector("#preview-image").src = this._link;
    this._popupImage.querySelector("#preview-image").alt = this._link;
    super.open();
  }
}
