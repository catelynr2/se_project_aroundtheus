import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._confirmButton = this._popupElement.querySelector(
      ".modal__save-button"
    );
    this._confirmButtonText = this._confirmButton.textContent;
  }

  setAction(handleConfirm) {
    this._handleConfirm = handleConfirm;
  }

  setEventListeners() {
    super.setEventListeners();

    this._confirmButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleConfirm();
    });
  }

  renderLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._confirmButton.textContent = loadingText;
    } else {
      this._confirmButton.textContent = this._confirmButtonText;
    }
  }
}
