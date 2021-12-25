import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

function Form({ formName, submitButton, formText, link, linkText, children }) {
  return (
    <>
      <form className="form" name={`${formName}-form`} noValidate>
        <div className="form__input-container">
          {children}

          <label htmlFor="email" className="form__label">
            {" "}
            E-mail
          </label>
          <input type="email" className="form__input" name="email" required />
          <span id="form-name-input-error" className="form__error">
            Что-то пошло не так...
          </span>

          <label htmlFor="password" className="form__label">
            {" "}
            Пароль
          </label>
          <input
            type="password"
            className="form__input form__input_error"
            name="password"
            required
          />
          <span
            id="form-name-input-error"
            className="form__error form__error_visible"
          >
            Что-то пошло не так...
          </span>
        </div>
        <div className="form__input-container">
          <button type="submit" className="form__button">
            {submitButton}
          </button>
          <p className="form__text">
            {formText}
            <Link to={`/${link}`} className="form__link">
              {linkText}
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Form;
