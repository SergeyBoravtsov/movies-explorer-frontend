import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__list-link"
            href="https://sergeyboravtsov.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__project-name">Статичный сайт</p>
            <div className="portfolio__list-arrow" />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__list-link"
            href="https://sergeyboravtsov.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__project-name">Адаптивный сайт</p>
            <div className="portfolio__list-arrow" />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__list-link"
            href="https://sergeyboravtsov.github.io/mesto/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__project-name">Одностраничное приложение</p>
            <div className="portfolio__list-arrow" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
