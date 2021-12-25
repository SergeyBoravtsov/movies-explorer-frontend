import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, generalClass }) {
  return (
    <>
      <ul className={`movies-list ${generalClass}__list`}>
        {movies.map((card, i) => (
          <MoviesCard card={card} key={i}/>
        ))}
      </ul>
      <button
        type="button"
        className={`another-button ${generalClass}__button`}
      >
        Ещё
      </button>
    </>
  );
}

export default MoviesCardList;
