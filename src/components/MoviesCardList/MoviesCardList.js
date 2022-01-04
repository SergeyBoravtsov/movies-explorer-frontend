import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, isSavedMoviesPage }) {
  return (
    <>
      <ul className="movies-list">
        {movies.map((card, i) => (
          <MoviesCard card={card} key={i} isSavedMoviesPage={isSavedMoviesPage} />
        ))}
      </ul>
      <button
        type="button"
        className="another-button"
      >
        Ещё
      </button>
    </>
  );
}

export default MoviesCardList;
