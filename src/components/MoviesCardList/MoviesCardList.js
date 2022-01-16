import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { Route } from "react-router-dom";

function MoviesCardList({
  savedMovies,
  filteredMovies,
  moviesIndexShown,
  createFilm,
  deleteFilm,
  isFilteredMovies,
  filteredSavedMovies,
}) {
  return (
    <ul className="movies-list">
      <Route path="/saved-movies">
        {savedMovies.length > 0 &&
          !isFilteredMovies &&
          savedMovies.map((movie) => {
            return (
              <MoviesCard
                key={movie._id}
                card={movie}
                savedMovies={savedMovies}
                deleteFilm={deleteFilm}
              />
            );
          })}
        {isFilteredMovies &&
          filteredSavedMovies.map((movie) => {
            return (
              <MoviesCard
                key={movie._id}
                card={movie}
                savedMovies={savedMovies}
                deleteFilm={deleteFilm}
              />
            );
          })}
      </Route>

      <Route path="/movies">
        {filteredMovies &&
          filteredMovies.reduce((result, card, i) => {
            if (i < moviesIndexShown) {
              result.push(
                <MoviesCard
                  key={card.id}
                  card={card}
                  createFilm={createFilm}
                  savedMovies={savedMovies}
                  deleteFilm={deleteFilm}
                />
              );
            }
            return result;
          }, [])}
      </Route>
    </ul>
  );
}

export default MoviesCardList;
