export default class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "9a60ea94-9d34-4f3e-83e3-c406b7fc4ac5",
        "Content-Type": "application/json",
        name: "",
        link: "",
        _id: "",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // other methods for working with the API
  getUserInfo() {
    fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      headers: {
        name: "",
        about: "",
        avatar: "",
        _id: "9a60ea94-9d34-4f3e-83e3-c406b7fc4ac5",
      },
    });
  }
}

function renderCards() {
  return Promise.all(userInfo, cardsList);
}
