export default class Utils {
  constructor(obj, formElement) {
    this._inputSelector = obj.inputSelector;
    this._submitButtonSelector = obj.submitButtonSelector;
    this._inactiveButtonClass = obj.inactiveButtonClass;
    this._inputErrorClass = obj.inputErrorClass;
    this._errorClass = obj.errorClass;
    this._formElement = formElement;
    this._submitButton = formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );
  }

  _handleEscapeKeyDown() {}
}
