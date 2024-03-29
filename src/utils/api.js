class Api {
  constructor({ baseURL, headers }) {
    this.url = baseURL;
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
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  editUserInfo(data) {
    console.log(this._headers)
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  //отображение карточек с сервера
  getCards() {
    return fetch(`${this.url}/cards`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  addNewCard(data) {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, like) {
    const methodName = like ? "PUT" : "DELETE";
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: methodName,
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  editAvatar({ avatar }) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: `${avatar}`,
      }),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseURL: process.env.REACT_APP_API_HTTP,
});

export default api;
