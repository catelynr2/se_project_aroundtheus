const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  validationConfig
) => {
  const errorClass = validationConfig.errorClass;
  const inputErrorClass = validationConfig.inputErrorClass;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorClass = validationConfig.errorClass;
  const inputErrorClass = validationConfig.inputErrorClass;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(errorClass);
};

function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      configObj
    );
  } else {
    hideInputError(formElement, inputElement, configObj);
  }
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputElement) => inputElement.validity.valid);
}

function disableButton(submitButton, configObj) {
  const inactiveButtonClass = configObj.inactiveButtonClass;
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
  return;
}

function enableButton(submitButton, configObj) {
  const inactiveButtonClass = configObj.inactiveButtonClass;
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
  return;
}

function toggleButtonState(inputList, submitButton, configObj) {
  const inactiveButtonClass = configObj.inactiveButtonClass;
  if (hasInvalidInput(inputList)) {
    disableButton(submitButton, configObj);
  } else {
    enableButton(submitButton, configObj);
  }
}

function setEventListeners(formElement, configObj) {
  const inputSelector = configObj.inputSelector;
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButtonSelector = configObj.submitButtonSelector;
  const submitButton = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      checkInputValidity(formElement, inputElement, configObj);
      toggleButtonState(inputList, submitButton, configObj);
    });
  });
}

function enableValidation(configObj) {
  const formList = Array.from(
    document.querySelectorAll(configObj.formSelector)
  );

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, configObj);
  });
}

const configObj = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(configObj);
