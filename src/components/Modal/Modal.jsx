import React from "react";
import "../Modal/Modal.css";

const Modal = ({ image, setOpen }) => {
  return (
    <div id="myModal" className="modal" onClick={() => setOpen(false)}>
      <div className="close">
        &times;
      </div>
      <img className="modal-content" alt={image.id} src={image.download_url} />
    </div>
  );
};

export default Modal;
