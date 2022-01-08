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

function App() {
  // получение данных с API и их запись в стейты
  const name = "Сергей";
  const email = "sergeyboravtsov@yandex.ru";

  const history = useHistory();

  // функция переброса пользователя на главный экран при выходе из личного кабинета
  const handleSignOut = () => {
    history.push("/");
  };

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile name={name} email={email} handleSignOut={handleSignOut} />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="*">
          <PageNotFound history={history} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
