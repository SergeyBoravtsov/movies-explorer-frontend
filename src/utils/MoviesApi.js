import { MOVIES_URL } from "./constants";
import { getResponseData } from "./helper";

export const getAllMovies = () => {
  return fetch(`${MOVIES_URL}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => getResponseData(response));
};
