export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = data;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      // Based on the isOwner field, create instances of the classes
      const card = item.isOwner
        ? new UserCard(item, ".card-template_type_user")
        : new DefaultCard(item, ".card-template_type_default");

      const cardElement = card.generateCard();

      // Insert the markup on the page
      // using the setItem() method of the Section() class
      this.setItem(cardElement);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
