export default class UserInfo {
  constructor(userNameSelector, userJobSelector) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userNameElement.textContent,
      job: this._userJobElement.textContent,
    };
    return userInfo;
  }

  setUserInfo(data) {
    this._userNameElement.textContent = data.title;
    this._userJobElement.textContent = data.description;
  }
}
