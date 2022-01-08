import React from "react";
import "./AboutMe.css";
import myPhoto from "../../images/my-foto.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <h2 className="about-me__title">Студент</h2>
      <img className="about-me__photo" src={myPhoto} alt="Моё фото" />
      <div className="about-me__container">
        <p className="about-me__name">Сергей</p>
        <p className="about-me__profession">Фронтенд-разработчик, 35 лет</p>
        <p className="about-me__description">
          Привет! Я из города Томск. Закончил томский университет систем
          управления и радиоэлектроники. Проработал 12 лет инженером-испытателем
          различного оборудования. Увлекаюсь фотографией, чтением, лыжами. Хочу
          сменить профессию и попробовать себя в качестве веб-разработчика.
        </p>
        <ul className="about-me__links-list">
          <li>
            <a
              className="about-me__link"
              href="https://www.facebook.com/sergey.boravtsov/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              className="about-me__link"
              href="https://github.com/SergeyBoravtsov"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
