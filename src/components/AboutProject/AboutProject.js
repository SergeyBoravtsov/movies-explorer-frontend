import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="project">
      <h2 className="about-project__title">О проекте</h2>

      <div className="about-project__table">
        <div className="about-project__table-block">
          <h3 className="about-project__table-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__table-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__table-block">
          <h3 className="about-project__table-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__table-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about-project__timeline">
        <div className="about-project__segment about-project__segment_part_backend">
          <p className="about-project__segment-text">1 неделя</p>
        </div>
        <div className="about-project__segment about-project__segment_part_frontend">
          <p className="about-project__segment-text about-project__segment-text_part_frontend">
            4 недели
          </p>
        </div>
        <p className="about-project__segment-text about-project__segment-text_part_underline">
          Back-end
        </p>
        <p className="about-project__segment-text about-project__segment-text_part_underline">
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
