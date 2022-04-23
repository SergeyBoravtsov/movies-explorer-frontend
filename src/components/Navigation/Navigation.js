import React from "react";
import "./Navigation.css";
import { Link, Route } from "react-router-dom";

function Navigation({ isMenuOpen, isLoggedIn }) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {isMenuOpen && (
          <li className="navigation__list-item">
            <Link className={`navigation__link`} to="/">
              Главная
            </Link>
          </li>
        )}

        {isLoggedIn && (
          <Route exact path={"/"}>
            <li className="navigation__list-item">
              <Link
                className={`navigation__link navigation__link_color_white`}
                to="/movies"
              >
                Фильмы
              </Link>
            </li>
            <li className="navigation__list-item">
              <Link
                className={`navigation__link navigation__link_color_white`}
                to="/saved-movies"
              >
                Сохраненные фильмы
              </Link>
            </li>
          </Route>
        )}

        <Route path={"/movies"}>
          <li className="navigation__list-item">
            <Link
              className={`navigation__link navigation__link_active`}
              to="/movies"
            >
              Фильмы
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link className={`navigation__link`} to="/saved-movies">
              Сохраненные фильмы
            </Link>
          </li>
        </Route>

        <Route path={"/saved-movies"}>
          <li className="navigation__list-item">
            <Link className={`navigation__link`} to="/movies">
              Фильмы
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link
              className={`navigation__link navigation__link_active`}
              to="/saved-movies"
            >
              Сохраненные фильмы
            </Link>
          </li>
        </Route>

        <Route path={"/profile"}>
          <li className="navigation__list-item">
            <Link className={`navigation__link`} to="/movies">
              Фильмы
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link className={`navigation__link`} to="/saved-movies">
              Сохраненные фильмы
            </Link>
          </li>
        </Route>
      </ul>
    </nav>
  );
}

export default Navigation;
