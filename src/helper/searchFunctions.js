import { SHORT_FILM_DURATION } from "./MoviesConstants";

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
    console.log(movie);
    return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
  });
};
