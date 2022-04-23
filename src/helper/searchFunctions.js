import { SHORT_FILM_DURATION } from "../utils/constants";

export const shortMoviesSearchHandle = (movies) => {
  return movies.reduce((result, movieInfo) => {
    if (movieInfo.duration <= SHORT_FILM_DURATION) {
      result.push(movieInfo);
    }
    return result;
  }, []);
};

export const moviesSearchHandle = (movies, searchValue) => {
  return movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
  });
};
