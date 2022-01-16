import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

import {
  register,
  authorize,
  getUserInfo,
  logout,
  setUserInfo,
  getSavedMovies,
  addCard,
  deleteCard,
} from "../../utils/MainApi";
import { getAllMovies } from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRegisteredError, setIsRegisteredError] = React.useState(false);
  const [isLoginError, setIsLoginError] = React.useState(false);
  const [isEditError, setIsEditError] = React.useState(false);
  const [isEditSuccess, setIsEditSuccess] = React.useState(false);

  //проверяем зарегистрирован ли пользователь
  const isLoggedInCheck = () => {
    getUserInfo()
      .then((data) => {
        // проверяем, пришли ли данные
        if (data) {
          // записываем данные о пользователе в контекст
          setCurrentUser(data);
          // записываем стейт авторизации
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // получаем данные пользователя при монтировании компонента App
  React.useEffect(() => {
    isLoggedInCheck();
  }, []);

  React.useEffect(() => {
    if (isLoggedIn) {
      // получаем данные пользователя
      getUserInfo()
        .then((data) => {
          if (data) {
            console.log(data);
            setCurrentUser(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      setIsLoading(true);
      // получаем все фильмы с https://api.nomoreparties.co/beatfilm-movies
      getAllMovies()
        .then((moviesInfo) => {
          if (moviesInfo) {
            console.log(moviesInfo);
            setMovies(moviesInfo);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));

      // получаем сохранённые фильмы с https://api.sergbor.movies.nomoredomains.rocks/movies
      getSavedMovies()
        .then((savedMoviesInfo) => {
          if (savedMoviesInfo) {
            console.log(savedMoviesInfo);
            setSavedMovies(savedMoviesInfo);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      history.push("/movies");
    }
  }, [history, isLoggedIn]);

  // регистрация
  const handleRegister = (email, password, name) => {
    register(email, password, name)
      .then((data) => {
        if (data) {
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        setIsRegisteredError(true);
      });
  };

  // логин
  const handleLogin = (email, password) => {
    authorize(email, password)
      .then((data) => {
        if (data) {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setIsLoginError(true);
        console.log(err);
      });
  };

  // логаут
  const handleSignOut = () => {
    logout()
      .then(() => {
        history.push("/");
        setIsLoggedIn(false);
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // изменить данные пользователя
  const changeProfileInfo = (name, email) => {
    setUserInfo(name, email)
      .then((info) => {
        setCurrentUser(info);
        setIsEditSuccess(true);
        setIsEditError(false);
        setTimeout(function removeSuccessMessage() {
          setIsEditSuccess(false);
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
        setIsEditError(true);
      });
  };

  // добавление фильма в избранное
  const createFilm = (card) => {
    addCard(card)
      .then((movieInfo) => {
        setSavedMovies([movieInfo, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  };

  // удаление фильма из избранного
  const deleteFilm = (cardId) => {
    deleteCard(cardId)
      .then(() => {
        const newMovies = savedMovies.filter(
          (savedMovie) => savedMovie._id !== cardId
        );
        setSavedMovies(newMovies);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/signup">
            <Register
              handleRegister={handleRegister}
              isRegisteredError={isRegisteredError}
              isLoggedIn={isLoggedIn}
            />
          </Route>
          <Route path="/signin">
            <Login
              handleLogin={handleLogin}
              isLoginError={isLoginError}
              isLoggedIn={isLoggedIn}
            />
          </Route>

          <ProtectedRoute
            path="/profile"
            component={Profile}
            handleSignOut={handleSignOut}
            changeProfileInfo={changeProfileInfo}
            isEditSuccess={isEditSuccess}
            isEditError={isEditError}
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            path="/movies"
            component={Movies}
            isLoggedIn={isLoggedIn}
            movies={movies}
            isLoading={isLoading}
            createFilm={createFilm}
            savedMovies={savedMovies}
            deleteFilm={deleteFilm}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            savedMovies={savedMovies}
            deleteFilm={deleteFilm}
          />

          <Route path="*">
            <PageNotFound history={history} />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
