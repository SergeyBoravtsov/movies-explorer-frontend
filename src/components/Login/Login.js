import React from "react";
import "./Login.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import { useFormWithValidation } from "../../Hooks/useFormWithValidation";

function Login({ handleLogin, isLoginError, isLoggedIn }) {
  const formWithValidation = useFormWithValidation();
  const { email, password } = formWithValidation.values;

  const submitHandle = (event) => {
    event.preventDefault();
    handleLogin(email, password);
    formWithValidation.resetForm();
  };

  return (
    <div className="login">
      <Header isLoggedIn={isLoggedIn} />
      <Form
        formName="login"
        submitButton="Войти"
        formText="Ещё не зарегистрированы?"
        link="signup"
        linkText="Регистрация"
        formData={formWithValidation}
        onSubmit={submitHandle}
        isLoginError={isLoginError}
      ></Form>
    </div>
  );
}

export default Login;
