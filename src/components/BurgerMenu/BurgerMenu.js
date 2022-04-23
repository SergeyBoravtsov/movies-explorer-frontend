import React from "react";
import "./BurgerMenu.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import profileIcon from "../../images/profile-icon.svg";

function BurgerMenu({ isLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <button className="header__menu-button" onClick={openMenu} />

      {isMenuOpen && <div className={`header__overlay`} />}

      <div
        className={`header__menu-container ${
          isMenuOpen && "header__menu-container_opened"
        }`}
      >
        {isMenuOpen && (
          <button
            type="button"
            className="header__close-button"
            onClick={closeMenu}
          />
        )}

        <Navigation isMenuOpen={isMenuOpen} isLoggedIn={isLoggedIn} />

        <Link to="/profile" className="header__link">
          <img
            className="header__profile-icon"
            src={profileIcon}
            alt="Фигурка человека"
          />
          Аккаунт
        </Link>
      </div>
    </>
  );
}

export default BurgerMenu;
