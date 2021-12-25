import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab">
      <nav className="navtab__container">
        <ul className="navtab__list">
          <li className="navtab__list-item">
            <a className="navtab__list-item-link" href="#project">
              О проекте
            </a>
          </li>
          <li className="navtab__list-item">
            <a className="navtab__list-item-link" href="#technologies">
              Технологии
            </a>
          </li>
          <li className="navtab__list-item">
            <a className="navtab__list-item-link" href="#student">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
