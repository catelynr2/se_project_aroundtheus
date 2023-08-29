class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1", {
      headers: {
        authorization: "9a60ea94-9d34-4f3e-83e3-c406b7fc4ac5",
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
        authorization: "9a60ea94-9d34-4f3e-83e3-c406b7fc4ac5",
      },
    });
  }
}

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "9a60ea94-9d34-4f3e-83e3-c406b7fc4ac5",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((result) => {
    // process the result
  })
  .catch((err) => {
    console.error(err); // log the error to the console
  });

function renderCards() {
  return Promise.all(userInfo, cardsList);
}
