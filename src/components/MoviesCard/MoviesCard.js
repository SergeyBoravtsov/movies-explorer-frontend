import React, { useState } from "react";
import "./MoviesCard.css";

function MovieCard({ card, isSavedMoviesPage }) {
  const [isSavedMovie, setIsSavedMovie] = useState(false);

  function toggleSavedMovie() {
    setIsSavedMovie(!isSavedMovie);
  }

  return (
    <li className="movie-card">
      <figure className="movie-card__container">
        <figcaption className="movie-card__info">
          <h3 className="movie-card__title">{card.nameRU}</h3>
          <p className="movie-card__duration">{card.duration}</p>
        </figcaption>
        <img src={card.image} className="movie-card__image" alt={card.nameRU} />
        <button
          className={`movie-card__button
                ${isSavedMovie && "movie-card__button_type_in-saved-movies"}
                ${
                  isSavedMoviesPage &&
                  "movie-card__button_type_remove-saved-movie"
                }`}
          onClick={toggleSavedMovie}
        >
          {isSavedMovie || isSavedMoviesPage ? "" : "Сохранить"}
        </button>
      </figure>
    </li>
  );
}

export default MovieCard;
