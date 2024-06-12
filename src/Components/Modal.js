import React, { useState } from "react";
import "./styles/modal.css";
import CloseIcon from "@mui/icons-material/Close";

function Modal({
  btnHeight,
  btnWidth,
  btnBg,
  modalHeight,
  modalWidth,
  modalBg,
  children,
  iconColor,
  textColor,
}) {
  const [modal, setModal] = useState(false);

  function open() {
    setModal(true);
  }

  function close() {
    setModal(false);
  }

  return modal ? (
    <div
      className="modal"
      style={{
        height: modalHeight,
        width: modalWidth,
        backgroundColor: modalBg,
      }}
    >
      <div className="modal__close_icon" onClick={close}>
        <CloseIcon sx={{ color: iconColor }} />
      </div>
      <div className="modal__content" style={{ color: textColor }}>
        {children}
      </div>
    </div>
  ) : (
    <div
      className="modal_button"
      style={{ height: btnHeight, width: btnWidth, backgroundColor: btnBg }}
      onClick={open}
    >
      <p>Modal</p>
    </div>
  );
}

export default Modal;
