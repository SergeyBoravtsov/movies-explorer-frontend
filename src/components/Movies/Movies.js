import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import {
  CARDS_QUANTITY_MAX,
  ADDITIONAL_CARDS_QUANTITY_MAX,
  WINDOW_WIDTH_MAX,
  ADDITIONAL_CARDS_QUANTITY_MIDDLE,
  CARDS_QUANTITY_MIDDLE,
  WINDOW_WIDTH_MIDDLE,
  CARDS_QUANTITY_SMALL,
  ADDITIONAL_CARDS_QUANTITY_SMALL,
} from "../../utils/constants";
import {
  shortMoviesSearchHandle,
  moviesSearchHandle,
} from "../../helper/searchFunctions";

function Movies({
  movies,
  isLoading,
  createFilm,
  savedMovies,
  deleteFilm,
  isLoggedIn,
}) {
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [allFilteredMovies, setAllFilteredMovies] = React.useState([]);
  const [shortFilteredMovies, setShortFilteredMovies] = React.useState([]);
  const [isCheckBoxClicked, setIsCheckBoxClicked] = React.useState(false);
  const [isFilteredMovies, setIsFilteredMovies] = React.useState(false);
  const [moviesIndexShown, setMoviesIndexShown] = React.useState(0);
  const [cardQuantity, setCardQuantity] = React.useState(0);
  const [additionalCardQuantity, setAdditionalCardQuantity] = React.useState(0);
  const [initialSearchValue, setInitialSearchValue] = React.useState("");

  const checkboxRef = React.useRef();

  // создаем массив с фильтрованными короткометражками
  React.useEffect(() => {
    // отбираем из массива фильмов с совпадением поисковой фразы те фильмы, где длительность <= 40 мин
    setShortFilteredMovies(shortMoviesSearchHandle(allFilteredMovies));
  }, [allFilteredMovies]);

  // определяем массив filteredMovies - массив фильмов, которые нужно отобразить в данный момент (в зависимости от положения переключателя)
  React.useEffect(() => {
    checkboxRef.current = isCheckBoxClicked; // запишем в реф значение чекбокса
    if (isCheckBoxClicked && filteredMovies) {
      setFilteredMovies(shortFilteredMovies);
    } else {
      setFilteredMovies(allFilteredMovies);
    }
  }, [
    isCheckBoxClicked,
    allFilteredMovies,
    shortFilteredMovies,
    filteredMovies,
  ]);

  React.useEffect(() => {
    // достаём данные из хранилища
    const savedData = localStorage.getItem("filteredMovies");
    const savedCheckBoxIsClicked = localStorage.getItem("checkBoxIsClicked");
    const savedSearchValue = localStorage.getItem("MoviesSearchValue");
    setInitialSearchValue(savedSearchValue);

    if (savedData) {
      setAllFilteredMovies(JSON.parse(savedData));
      setIsFilteredMovies(true);
    }

    if (savedCheckBoxIsClicked) {
      setIsCheckBoxClicked(JSON.parse(savedCheckBoxIsClicked));
    }

    // при размонтировании Movies выполнить следующее:
    return () => {
      localStorage.setItem("checkBoxIsClicked", checkboxRef.current);
      window.removeEventListener("resize", resizeThrottler, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  window.addEventListener("resize", resizeThrottler, false);

  let resizeTimeout;

  function resizeThrottler() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function setTime() {
        resizeTimeout = null;
        actualResizeHandler();
      }, 1000);
    }
  }

  // количество карточек в выдаче (и при нажатии на кнопку Ещё) в зависимости от ширины окна
  function actualResizeHandler() {
    if (window.innerWidth >= WINDOW_WIDTH_MAX) {
      if (filteredMovies.length < CARDS_QUANTITY_MAX) {
        setCardQuantity(filteredMovies.length);
        setMoviesIndexShown(filteredMovies.length);
      } else {
        setCardQuantity(CARDS_QUANTITY_MAX);
        setMoviesIndexShown(CARDS_QUANTITY_MAX);
        setAdditionalCardQuantity(ADDITIONAL_CARDS_QUANTITY_MAX);
      }
    } else if (
      window.innerWidth >= WINDOW_WIDTH_MIDDLE &&
      window.innerWidth < WINDOW_WIDTH_MAX
    ) {
      if (filteredMovies.length < CARDS_QUANTITY_MIDDLE) {
        setCardQuantity(filteredMovies.length);
        setMoviesIndexShown(filteredMovies.length);
      } else {
        setCardQuantity(CARDS_QUANTITY_MIDDLE);
        setMoviesIndexShown(CARDS_QUANTITY_MIDDLE);
        setAdditionalCardQuantity(ADDITIONAL_CARDS_QUANTITY_MIDDLE);
      }
    } else if (window.innerWidth < WINDOW_WIDTH_MIDDLE) {
      if (filteredMovies.length < CARDS_QUANTITY_SMALL) {
        setCardQuantity(filteredMovies.length);
        setMoviesIndexShown(filteredMovies.length);
      } else {
        setCardQuantity(CARDS_QUANTITY_SMALL);
        setMoviesIndexShown(CARDS_QUANTITY_SMALL);
        setAdditionalCardQuantity(ADDITIONAL_CARDS_QUANTITY_SMALL);
      }
    }
  }

  React.useEffect(() => {
    actualResizeHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allFilteredMovies, filteredMovies]);

  // обработчик нажатия на кнопку Ещё
  const handleAddCards = () => {
    if (moviesIndexShown <= filteredMovies.length) {
      if (moviesIndexShown + additionalCardQuantity > filteredMovies.length) {
        setMoviesIndexShown(filteredMovies.length);
      } else {
        setMoviesIndexShown(moviesIndexShown + additionalCardQuantity);
      }
    }
  };

  // обработчик сабмита для компонента SearchForm
  const searchHandle = (searchValue) => {
    const filteredMovies = moviesSearchHandle(movies, searchValue);
    setAllFilteredMovies(filteredMovies);
    setIsFilteredMovies(true);
    localStorage.setItem("MoviesSearchValue", searchValue);
    if (filteredMovies.length !== 0) {
      localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
    } else {
      localStorage.removeItem("filteredMovies");
    }
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="movies">
        <SearchForm
          setIsCheckBoxClicked={setIsCheckBoxClicked}
          isCheckBoxClicked={isCheckBoxClicked}
          searchHandle={searchHandle}
          initialSearchValue={initialSearchValue}
        />

        {isLoading && <Preloader />}

        {isFilteredMovies && filteredMovies.length === 0 && (
          <p className="movies__text">Ничего не найдено</p>
        )}

        {isFilteredMovies && !isLoading && (
          <MoviesCardList
            filteredMovies={filteredMovies}
            cardQuantity={cardQuantity}
            moviesIndexShown={moviesIndexShown}
            createFilm={createFilm}
            savedMovies={savedMovies}
            deleteFilm={deleteFilm}
          />
        )}
        {moviesIndexShown !== filteredMovies.length && (
          <button
            type="button"
            className="movies__additional-button"
            onClick={handleAddCards}
          >
            Ещё
          </button>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Movies;
