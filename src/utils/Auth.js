class Auth {
  constructor({ baseURL, headers }) {
    this.url = baseURL;
    this._headers = headers;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  setRegisterUser(data) {
    return fetch(`${this.url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        return data;
      });
  }

  setAuthorizeUser(data) {
    return fetch(`${this.url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          return data;
        } else {
          return;
        }
      });
  }

  getAuthenticationUser(token) {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const auth = new Auth({
  baseURL: "https://auth.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});

export default auth;
