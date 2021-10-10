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

export const getUserInfo = () => fetch(`${URL}/users/me`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
})
  .then(resultCheck);

export const patchUser = (email, name) => fetch(`${URL}/users/me`, {
  method: 'PATCH',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
  body: JSON.stringify({ email, name }),
})
  .then(resultCheck);

export const getMovies = () => fetch(`${URL}/movies`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
})
  .then(resultCheck);

export const saveMovie = (movie) => fetch(`${URL}/movies`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
  body: JSON.stringify(movie),
})
  .then(resultCheck);

export const deleteMovie = (id) => fetch(`${URL}/movies/${id}`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
})
  .then(resultCheck);
