export default class FormValidator {
  constructor(obj, formElement) {
    this._inputSelector = obj.inputSelector;
    this._submitButtonSelector = obj.submitButtonSelector;
    this._inactiveButtonClass = obj.inactiveButtonClass;
    this._inputErrorClass = obj.inputErrorClass;
    this._errorClass = obj.errorClass;
    this._form = formElement;
    this._submitButton = formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );
  }

  _showInputError(inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(errorElement);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputSelector.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(errorElement);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  _toggleButtonState() {
    const isFormValid = this._checkFormValidity();

    if (isFormValid) {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    }
  }

  _checkFormValidity() {
    return this._inputList.every((inputElement) => inputElement.validity.valid);
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      return this._showInputError(inputEl);
    }
    this._hideInputError(inputEl);
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    this._setEventListeners();
  }
}
