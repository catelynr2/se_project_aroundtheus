const previewImageModal = document.querySelector("#preview-image-modal");
const previewImageCloseButton = document.querySelector(
  "#preview-image-close-button"
);

export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscapeKeyDown);
}

export function closePopUp(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscapeKeyDown);
}

export function handleEscapeKeyDown(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closePopUp(openedModal);
  }
}
