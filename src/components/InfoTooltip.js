import React from "react";
import successfully from "../images/successfully.svg";
import unsuccessfully from "../images/unsuccessfully.svg";

function InfoTooltip({ isOpen, onClose, isRequestStatus }) {
  return (
    <section
      className={`popup popup__info-tool-tip ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__content">
        <button
          className="popup__close-button"
          aria-label="Close"
          type="button"
          onClick={onClose}
        ></button>

        <div className="popup__request-status">
          <img
            className="popup__status-icon"
            src={isRequestStatus ? successfully : unsuccessfully}
            alt="sign"
          />
          <h2 className="popup__title popup__title-status">
            {isRequestStatus
              ? "Вы успешно зарегистрировались!"
              : "Что-то пошло не так! Попробуйте ещё раз."}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default InfoTooltip;
