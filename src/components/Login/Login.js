import React from "react";
import "./Login.css";
import Header from "../Header/Header";
import Form from "../Form/Form";

function Login() {
  return (
    <>
      <Header headerText="Рады видеть!" />
      <Form
        formName="login"
        submitButton="Войти"
        formText="Ещё не зарегистрированы?"
        link="signup"
        linkText="Регистрация"
      ></Form>
    </>
  );
}

export default Login;
