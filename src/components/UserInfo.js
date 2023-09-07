export default class UserInfo {
  constructor(userNameSelector, userJobSelector, userAvatarSelector) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userNameElement.textContent,
      job: this._userJobElement.textContent,
    };
    return userInfo;
  }

  setUserInfo({ name, about }) {
    this._userNameElement.textContent = name;
    this._userJobElement.textContent = about;
  }

  setAvatar({ avatar }) {
    this._userAvatarElement.src = avatar;
  }
}
