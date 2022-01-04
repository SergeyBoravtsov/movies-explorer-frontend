import React from "react";
import "./Register.css";
import Header from "../Header/Header";
import Form from "../Form/Form";

function Register() {
  return (
    <div className="register">
      <Header headerText="Добро пожаловать!" />
      <Form
        formName="register"
        submitButton="Зарегистрироваться"
        formText="Уже зарегистрированы?"
        link="signin"
        linkText="Войти"
      >
        <label htmlFor="name" className="form__label">
          {" "}
          Имя
        </label>
        <input type="text" className="form__input" name="name" required />
        <span id="form-name-input-error" className="form__error">
          Что-то пошло не так...
        </span>
      </Form>
    </div>
  );
}

export default Register;
