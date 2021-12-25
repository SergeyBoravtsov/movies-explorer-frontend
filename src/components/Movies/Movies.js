import React from "react";
import "./Movies.css";
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
import image_6 from "../../images/movies-thumbnails/film_6.png";
import image_7 from "../../images/movies-thumbnails/film_7.png";
import image_8 from "../../images/movies-thumbnails/film_8.png";
import image_9 from "../../images/movies-thumbnails/film_9.png";
import image_10 from "../../images/movies-thumbnails/film_10.png";
import image_11 from "../../images/movies-thumbnails/film_11.png";
import image_12 from "../../images/movies-thumbnails/film_12.png";
import image_13 from "../../images/movies-thumbnails/film_13.png";
import image_14 from "../../images/movies-thumbnails/film_14.png";
import image_15 from "../../images/movies-thumbnails/film_15.png";
import image_16 from "../../images/movies-thumbnails/film_16.png";

function Movies() {
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
    {
      nameRU: "Книготорговцы",
      duration: "1ч 42м",
      image: image_6,
    },
    {
      nameRU: "Когда я думаю о Германии ночью",
      duration: "1ч 42м",
      image: image_7,
    },
    {
      nameRU: "Gimme Danger: История Игги и The Stooges",
      duration: "1ч 42м",
      image: image_8,
    },
    {
      nameRU: "Дженис: Маленькая девочка грустит",
      duration: "1ч 42м",
      image: image_9,
    },
    {
      nameRU: "Соберись перед прыжком",
      duration: "1ч 42м",
      image: image_10,
    },
    {
      nameRU: "Пи Джей Харви: A dog called money",
      duration: "1ч 42м",
      image: image_11,
    },
    {
      nameRU: "По волнам: Искусство звука в кино",
      duration: "1ч 42м",
      image: image_12,
    },
    {
      nameRU: "Рудбой",
      duration: "1ч 42м",
      image: image_13,
    },
    {
      nameRU: "Скейт — кухня",
      duration: "1ч 42м",
      image: image_14,
    },
    {
      nameRU: "Война искусств",
      duration: "1ч 42м",
      image: image_15,
    },
    {
      nameRU: "Зона",
      duration: "1ч 42м",
      image: image_16,
    },
  ];
  return (
    <>
      <Header />
      <section className="movies">
        <SearchForm />
        <Preloader />
        <MoviesCardList movies={movies} generalClass="movies" />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
