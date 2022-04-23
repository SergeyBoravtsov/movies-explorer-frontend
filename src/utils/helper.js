import { ERROR_GENERAL_TEXT } from "./constants";

export const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(`${ERROR_GENERAL_TEXT} ${res.status}`);
  }
  return res.json();
};
