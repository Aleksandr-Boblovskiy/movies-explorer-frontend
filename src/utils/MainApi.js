/* eslint-disable prefer-promise-reject-errors */
const URL = 'https://api.kinopoisk.nomoredomains.rocks';

const resultCheck = (res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));

export const register = (email, password, name) => fetch(`${URL}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password, name }),
})
  .then(resultCheck);

export const login = (email, password) => fetch(`${URL}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
})
  .then(resultCheck)
  .then((data) => {
    localStorage.setItem('jwt', data.token);
    return data;
  });

export const checkToken = (token) => fetch(`${URL}/users/me`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then(resultCheck);
