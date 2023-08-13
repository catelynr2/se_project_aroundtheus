export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handlesEscClose);
  }

  close() {
    this._popupElement.classList.add("modal_opened");
    document.removeEventListener("keydown", this._handlesEscClose);
  }

  _handlesEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains(".modal__close-button") ||
        evt.target.classList.contains("modal")
      ) {
        this.close();
      }
    });
  }
}
