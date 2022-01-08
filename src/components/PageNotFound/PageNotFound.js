import React from "react";
import "./PageNotFound.css";

function PageNotFound({ history }) {
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <button
        className="not-found__back-button"
        type="button"
        onClick={history.goBack}
      >
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
