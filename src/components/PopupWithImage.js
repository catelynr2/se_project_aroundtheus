import Popup from "./Popup.js";
import Card from "./Card.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupImage = this._popupElement.querySelector("#preview-image-modal");
  }

  open() {
    this._popupImage.querySelector(".modal__large-view-image").src = this._link;
    this._popupImage.querySelector(".modal__large-view-image").alt = this._name;
    this._popupImage.querySelector(".modal__preview-image-name").textContent =
      this._name;
    super.open();
  }
}
