import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import {
  shortMoviesSearchHandle,
  moviesSearchHandle,
} from "../../helper/searchFunctions";

function SavedMovies({ savedMovies, deleteFilm, isLoggedIn }) {
  const [filteredSavedMovies, setFilteredSavedMovies] =
    React.useState(savedMovies);
  const [allFilteredSavedMovies, setAllFilteredSavedMovies] =
    React.useState(savedMovies);
  const [shortFilteredSavedMovies, setShortFilteredSavedMovies] =
    React.useState([]);
  const [isCheckBoxClicked, setIsCheckBoxClicked] = React.useState(false);
  const [isFilteredMovies, setIsFilteredMovies] = React.useState(false);
  const [initialSearchValue, setInitialSearchValue] = React.useState("");

  const checkboxRef = React.useRef();

  // создаем массив с фильтрованными короткометражками
  React.useEffect(() => {
    setShortFilteredSavedMovies(shortMoviesSearchHandle(filteredSavedMovies));
    console.log("Новый поиск короткометражек", shortFilteredSavedMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allFilteredSavedMovies]);

  React.useEffect(() => {
    checkboxRef.current = isCheckBoxClicked; // запишем в реф значение чекбокса
    if (isCheckBoxClicked && filteredSavedMovies) {
      setFilteredSavedMovies(shortFilteredSavedMovies);
      setIsFilteredMovies(true);
    } else {
      setFilteredSavedMovies(allFilteredSavedMovies);
    }
  }, [
    isCheckBoxClicked,
    filteredSavedMovies,
    shortFilteredSavedMovies,
    allFilteredSavedMovies,
  ]);

  React.useEffect(() => {
    const savedSearchValue = localStorage.getItem("savedMoviesSearchValue");
    setInitialSearchValue(savedSearchValue);

    const savedData = localStorage.getItem("filteredSavedMovies");
    if (savedData) {
      setFilteredSavedMovies(JSON.parse(savedData));
      setAllFilteredSavedMovies(JSON.parse(savedData));
      setIsFilteredMovies(true);
    }

    const savedCheckBoxIsClicked = localStorage.getItem(
      "checkBoxIsClickedOnSavedMovies"
    );
    if (savedCheckBoxIsClicked) {
      setIsCheckBoxClicked(JSON.parse(savedCheckBoxIsClicked));
    }

    return () => {
      localStorage.setItem(
        "checkBoxIsClickedOnSavedMovies",
        checkboxRef.current
      );
    };
  }, []);

  const searchHandle = (searchValue) => {
    const filteredSavedMovies = moviesSearchHandle(savedMovies, searchValue);
    setFilteredSavedMovies(filteredSavedMovies);
    setAllFilteredSavedMovies(filteredSavedMovies);
    setIsFilteredMovies(true);
    localStorage.setItem("savedMoviesSearchValue", searchValue);
    if (filteredSavedMovies.length !== 0) {
      localStorage.setItem(
        "filteredSavedMovies",
        JSON.stringify(filteredSavedMovies)
      );
    } else {
      localStorage.removeItem("filteredSavedMovies");
    }
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="saved-movies">
        <SearchForm
          searchHandle={searchHandle}
          setIsCheckBoxClicked={setIsCheckBoxClicked}
          isCheckBoxClicked={isCheckBoxClicked}
          initialSearchValue={initialSearchValue}
        />

        {savedMovies.length === 0 ||
          (filteredSavedMovies.length === 0 && (
            <p className="saved-movies__text">Ничего не найдено</p>
          ))}

        {savedMovies.length !== 0 && (
          <MoviesCardList
            savedMovies={savedMovies}
            deleteFilm={deleteFilm}
            filteredSavedMovies={filteredSavedMovies}
            isFilteredMovies={isFilteredMovies}
          />
        )}
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
