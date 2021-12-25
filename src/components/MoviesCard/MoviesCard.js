import React from "react";
import "./MoviesCard.css";
import { Route } from "react-router-dom";

function MoviesCard(card) {
  // функция для изменения цвета лайка
  const [isLiked, setIsLiked] = React.useState(false);
  const changeLikeColor = () => {
    if (isLiked === false) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  return (
    <li className="card">
      <img
        className="card__photo"
        src={card.card.image}
        alt={card.card.nameRU}
      />
      <div className="card__container">
        <h3 className="card__title">{card.card.nameRU}</h3>

        <Route path="/movies">
          <button
            className={`card__button card__button_type_like ${
              isLiked && "card__liked"
            }`}
            onClick={changeLikeColor}
          ></button>
        </Route>
        <Route path="/saved-movies">
          <button className={`card__button card__button_type_remove`}></button>
        </Route>
      </div>
      <p className="card__duration">{card.card.duration}</p>
    </li>
  );
}

export default MoviesCard;
