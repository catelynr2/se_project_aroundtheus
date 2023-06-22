const showInputError = (formElement, inputElement, errorMessage) => {
  const errorClass = configObj.errorClass;
  const inputErrorClass = configObj.inputErrorClass;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorClass = configObj.errorClass;
  const inputErrorClass = configObj.inputErrorClass;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(errorClass);
};

function isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputElement) => inputElement.validity.valid);
}

function disableButton(formElement, submitButton, configObj) {
  const inactiveButtonClass = configObj.inactiveButtonClass;
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
  return;
}

function enableButton(formElement, submitButton, configObj) {
  const inactiveButtonClass = configObj.inactiveButtonClass;
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
  return;
}

function keyHandler(evt) {
  if (evt.key === "Escape") {
    closePopUp(profileEditModal);
    closePopUp(addNewCardModal);
  }
}

const modal = document.querySelectorAll(".modal");
modal.forEach((modalElement) => {
  modalElement.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closePopUp(modalElement);
    }
  });
});

function toggleButtonState(inputList, submitButton, configObj) {
  const inactiveButtonClass = configObj.inactiveButtonClass;

  if (hasInvalidInput(inputList)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }
}

function setEventListeners(formElement, configObj) {
  const inputSelector = configObj.inputSelector;
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButtonSelector = configObj.submitButtonSelector;
  const submitButton = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      isValid(formElement, inputElement, configObj);
      toggleButtonState(inputList, submitButton, configObj);
    });
  });
}

function enableValidation(configObj) {
  const formList = Array.from(
    document.querySelectorAll(configObj.formSelector)
  );
  document.addEventListener("keydown", keyHandler);

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
  submitButtonSelector: ".modal__save_button",
  inactiveButtonClass: "modal__save_button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(configObj);
