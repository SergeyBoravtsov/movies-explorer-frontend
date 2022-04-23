import failImg from "../../images/fail.png";
import successImg from "../../images/success.png";
import "./InfoTooltip.css";

export default function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__content">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть"
          onClick={props.onClose}
        />

        <div className="popup__wrapper">
          <img
            className="popup__image"
            alt="#"
            src={props.status === "success" ? successImg : failImg}
          />
          <h2 className="popup__heading">
            {props.message !== ""
              ? props.message
              : props.status === "success"
              ? "Выполнено успешно."
              : "Что-то пошло не так! Попробуйте ещё раз."}
          </h2>
        </div>
      </div>
    </div>
  );
}
