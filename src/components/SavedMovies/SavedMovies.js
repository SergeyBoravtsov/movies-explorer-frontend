import React from "react";
import "./SavedMovies.css";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import image_1 from "../../images/movies-thumbnails/film_1.png";
import image_2 from "../../images/movies-thumbnails/film_2.png";
import image_3 from "../../images/movies-thumbnails/film_3.png";
import image_4 from "../../images/movies-thumbnails/film_4.png";
import image_5 from "../../images/movies-thumbnails/film_5.png";

function SavedMovies() {
  const movies = [
    {
      nameRU: "33 слова о дизайне",
      duration: "1ч 42м",
      image: image_1,
    },
    {
      nameRU: "Киноальманах «100 лет дизайна»",
      duration: "1ч 42м",
      image: image_2,
    },
    {
      nameRU: "В погоне за Бенкси",
      duration: "1ч 42м",
      image: image_3,
    },
    {
      nameRU: "Баския: Взрыв реальности",
      duration: "1ч 42м",
      image: image_4,
    },
    {
      nameRU: "Бег это свобода",
      duration: "1ч 42м",
      image: image_5,
    },
  ];
  return (
    <>
      <Header />
      <section className="saved-movies">
        <SearchForm />
        <Preloader />
        <MoviesCardList movies={movies} isSavedMoviesPage={true}/>
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
