import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile({ name, handleSignOut, email }) {
  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, {name}!</h2>
        <form className="profile__form" name="edit-form"></form>
        <label className="profile__form-label">
          Имя
          <input
            className="profile__form-input"
            type="text"
            value={name}
          ></input>
        </label>
        <label className="profile__form-label">
          Почта
          <input
            className="profile__form-input"
            type="email"
            value={email}
          ></input>
        </label>
        <button type="submit" className="profile__submit-button">
          Редактировать
        </button>
        <button className="profile__exit-button" onClick={handleSignOut}>
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
}

export default Profile;
