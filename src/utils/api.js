class Api {
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

  //отображение данных профиля с сервера
  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editUserInfo(data) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  //отображение карточек с сервера
  getCards() {
    return fetch(`${this.url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addNewCard(data) {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, like) {
    const methodName = like ? "PUT" : "DELETE";
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: methodName,
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editAvatar({ avatar }) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${avatar}`,
      }),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseURL: "https://mesto.nomoreparties.co/v1/cohort-52",
  headers: {
    authorization: "0052e1a2-cce0-4efd-a4a0-a96b7082b662",
    "Content-Type": "application/json",
  },
});

export default api;
