import React from "react";
import "./Header.css";
import { Link, Route, Switch } from "react-router-dom";
import logo from "../../images/logo.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ isLoggedIn }) {
  return (
    <Switch>
      <Route exact path="/">
        <header className="header header_page_main">
          <div className="header__container">
            <Link className="header__logo" to="/">
              <img src={logo} alt="логотип" />
            </Link>
            {!isLoggedIn && (
              <nav className="header__buttons">
                <Link to="/signup" className="header__button-register">
                  Регистрация
                </Link>
                <Link to="/signin" className="header__button-signin">
                  Войти
                </Link>
              </nav>
            )}
            {isLoggedIn && <BurgerMenu isLoggedIn={isLoggedIn} />}
          </div>
        </header>
      </Route>

      <Route path={["/movies", "/saved-movies", "/profile"]}>
        <header className="header header_page_authorized">
          <Link className="header__logo" to="/">
            <img src={logo} alt="логотип" />
          </Link>
          <BurgerMenu isLoggedIn={isLoggedIn} />
        </header>
      </Route>

      <Route path={["/signup", "/signin"]}>
        <header className="header header_page_notAuthorized">
          <Link className="header__logo header__logo_page_signin-signup" to="/">
            <img src={logo} alt="логотип" />
          </Link>
          <Route path={"/signup"}>
            <h2 className="header__title">Добро пожаловать!</h2>
          </Route>
          <Route path={"/signin"}>
            <h2 className="header__title">Рады видеть!</h2>
          </Route>
        </header>
      </Route>
    </Switch>
  );
}

export default Header;
