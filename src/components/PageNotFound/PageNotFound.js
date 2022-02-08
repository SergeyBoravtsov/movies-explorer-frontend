import React from "react";
import "./PageNotFound.css";

function PageNotFound({ history }) {

  function handleClick() {
    history.goBack();
  }

  React.useEffect(() => {
    console.log("Страница 404 монтирована");
    return () => {
      console.log("Страница 404 размонтирована");
    };
  }, []);

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <button
        className="not-found__back-button"
        type="button"
        onClick={handleClick}
      >
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
