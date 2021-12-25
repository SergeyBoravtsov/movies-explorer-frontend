import React from "react";
import "./Header.css";
import { Link, Route, Switch } from "react-router-dom";
import logoMainPage from "../../images/logo-main-page.svg";
import logoAnotherPage from "../../images/logo-another-page.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ isLoggedIn, isMainPage }) {
  return (
    <Switch>
      <Route exact path="/">
        <header className="header header_page_main">
          <div className="header__container">
            {isMainPage && (
              <Link className="header__logo" to="/">
                <img src={logoMainPage} alt="логотип главной страницы" />
              </Link>
            )}
            {!isMainPage && (
              <Link className="header__logo" to="/">
                <img src={logoAnotherPage} alt="логотип остальных страниц" />
              </Link>
            )}
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
            {isLoggedIn && <BurgerMenu />}
          </div>
        </header>
      </Route>

      <Route path={["/movies", "/saved-movies", "/profile"]}>
        <header className="header header_page_authorized">
          {isMainPage && (
            <Link className="header__logo" to="/">
              <img src={logoMainPage} alt="логотип главной страницы" />
            </Link>
          )}
          {!isMainPage && (
            <Link className="header__logo" to="/">
              <img src={logoAnotherPage} alt="логотип остальных страниц" />
            </Link>
          )}
          <BurgerMenu />
        </header>
      </Route>

      <Route path={["/signup", "/signin"]}>
        <header className="header header_page_notAuthorized">
          {isMainPage && (
            <Link className="header__logo" to="/">
              <img src={logoMainPage} alt="логотип главной страницы" />
            </Link>
          )}
          {!isMainPage && (
            <Link className="header__logo" to="/">
              <img src={logoAnotherPage} alt="логотип остальных страниц" />
            </Link>
          )}
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
