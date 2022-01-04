import React from "react";
import "./Login.css";
import Header from "../Header/Header";
import Form from "../Form/Form";

function Login() {
  return (
    <div className="login">
      <Header headerText="Рады видеть!" />
      <Form
        formName="login"
        submitButton="Войти"
        formText="Ещё не зарегистрированы?"
        link="signup"
        linkText="Регистрация"
      ></Form>
    </div>
  );
}

export default Login;
