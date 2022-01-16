import { MAIN_API_URL } from "./constants";
import { getResponseData } from "./helper";

export const register = (email, password, name) => {
  return fetch(`${MAIN_API_URL}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then((response) => getResponseData(response));
};

export const authorize = (email, password) => {
  return fetch(`${MAIN_API_URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => getResponseData(response));
};

//запрос информации с сервера о данных пользователя
export const getUserInfo = () => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(getResponseData);
};

// отправка новых данных о пользователе на сервер
export const setUserInfo = (name, email) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      name,
      email,
    }),
  }).then(getResponseData);
};

export const logout = () => {
  return fetch(`${MAIN_API_URL}/signout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getResponseData);
};

// получение фильмов
export const getSavedMovies = () => {
  return fetch(`${MAIN_API_URL}/movies`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(getResponseData);
};

//добавление карточки на сервер
export const addCard = (data) => {
  return fetch(`${MAIN_API_URL}/movies `, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      country: data.country || "No data",
      director: data.director || "No data",
      duration: data.duration || "No data",
      year: data.year || "No data",
      description: data.description || "No data",
      image: data.image,
      trailer: data.trailerLink || "No data",
      movieId: data.id || "No data",
      nameRU: data.nameRU,
      nameEN: data.nameEN || "No name",
      thumbnail: data.image || "No data",
    }),
  }).then(getResponseData);
};

//удаление карточки с сервера
export const deleteCard = (id) => {
  return fetch(`${MAIN_API_URL}/movies/${id} `, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getResponseData);
};
