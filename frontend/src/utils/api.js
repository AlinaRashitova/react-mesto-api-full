class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  async getUserInfo() {
    const response = await fetch(`${this._baseUrl}/users/me`, {
    headers: {
      ...this._headers,
      authorization: `Bearer ${localStorage.getItem("token")}`
  }});
    return this._checkResponse(response);
  }

  async getInitialCards() {
    const response = await fetch(`${this._baseUrl}/cards`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("token")}`
    }});
    return this._checkResponse(response);
  }

  async editProfile(userData) {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {...this._headers, authorization: `Bearer ${localStorage.getItem("token")}`},
      body: JSON.stringify(userData),
    });
    return this._checkResponse(response);
  }

  async addCard(cardData) {
    const response = await fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {...this._headers, authorization: `Bearer ${localStorage.getItem("token")}`},
      body: JSON.stringify(cardData),
    });
    return this._checkResponse(response);
  }

  async putLike(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {...this._headers, authorization: `Bearer ${localStorage.getItem("token")}`}
    });
    return this._checkResponse(response);
  }

  async deleteLike(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {...this._headers, authorization: `Bearer ${localStorage.getItem("token")}`}
    });
    return this._checkResponse(response);
  }

  async changeAvatar({ avatar }) {
    const response = await fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {...this._headers, authorization: `Bearer ${localStorage.getItem("token")}`},
      body: JSON.stringify({ avatar }),
    });
    return this._checkResponse(response);
  }

  async deleteCard(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {...this._headers, authorization: `Bearer ${localStorage.getItem("token")}`},
    });
    return this._checkResponse(response);
  }
}

export const api = new Api({
  baseUrl: "https://api.mestoproj.nomoredomainsclub.ru",
  //"http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

 //ee39efb6-2446-4174-bff3-4bc3ae8ed76b
