import React from "react";
import "./MoviesCard.css";
import { Route } from "react-router-dom";
import { imageCheck, convertMinutesToHours } from "../../helper/cardFunctions";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({ card, createFilm, savedMovies, deleteFilm }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isAddedToSaved, setIsAddedToSaved] = React.useState(false);

  const handleClickAddToSavedButton = () => {
    // если есть картинка в card - используем её, если нет - используем пустую картинку
    const imageLink = imageCheck(card.image);
    if (!isAddedToSaved) {
      createFilm({ ...card, image: imageLink });
      setIsAddedToSaved(true);
    } else {
      const movieItem = savedMovies.filter(
        (savedMovie) => savedMovie.movieId === card.id
      );
      deleteFilm(movieItem[0]._id);
      setIsAddedToSaved(false);
    }
  };

  const handleClickDeleteButton = () => {
    deleteFilm(card._id);
  };

  React.useEffect(() => {
    if (savedMovies.length > 0) {
      if (!isAddedToSaved) {
        setIsAddedToSaved(
          savedMovies.some(
            (savedMovie) =>
              savedMovie.movieId === card.id &&
              savedMovie.owner === currentUser._id
          )
        );
      } else {
        setIsAddedToSaved(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li className="movie-card">
      <figure className="movie-card__container">
        <figcaption className="movie-card__info">
          <h3 className="movie-card__title">{card.nameRU}</h3>
          <p className="movie-card__duration">
            {convertMinutesToHours(card.duration)}
          </p>
        </figcaption>

        <a href={card.trailer} target="_blank" rel="noreferrer">
          <Route path="/saved-movies">
            <img
              className="movie-card__image"
              src={card.image}
              alt={card.nameRU}
            />
          </Route>
        </a>
        <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <Route path="/movies">
            <img
              className="movie-card__image"
              src={imageCheck(card.image)}
              alt={card.nameRU}
            />
          </Route>
        </a>

        <Route path="/movies">
          <button
            className={`movie-card__button ${
              isAddedToSaved && "movie-card__button_type_added-to-saved-movies"
            }`}
            onClick={handleClickAddToSavedButton}
          >
            {" "}
            {isAddedToSaved ? "" : "Сохранить"}{" "}
          </button>
        </Route>
        <Route path="/saved-movies">
          <button
            className="movie-card__button movie-card__button_type_remove-saved-movie"
            onClick={handleClickDeleteButton}
          />
        </Route>
      </figure>
    </li>
  );
}

export default MoviesCard;
