export default class Popup {
  constructor(formSelector) {
    this._popupElement = document.querySelector(formSelector);
    this._handlesEscClose = this._handlesEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handlesEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handlesEscClose);
  }

  _handlesEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal")) {
        this.close();
      }
    });

    this._popupElement
      .querySelector(".modal__close-button")
      .addEventListener("click", () => {
        this.close();
      });

    // this._popupElement.addEventListener("click", (evt) => {
    //  if (
    //    evt.target.classList.contains("modal__close-button") ||
    //    evt.target.classList.contains("modal")
    //  ) {
    //    this.close();
    //  }
    // });
  }
}
