import React, { Fragment, useState } from "react";
import Modal from "../Modal/Modal";
import "../Gallery/Gallery.css";

const Gallery = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const showModal = (item) => {
    setModalImage(item);
    setOpen(true);
  };

  return (
    <Fragment>
      <div className="carousel">
        {images?.map((item) => (
          <div key={item.id} className="slide" onClick={() => showModal(item)}>
            <img src={item.download_url} alt={item.id} />
          </div>
        ))}
      </div>
      <div>{open && <Modal image={modalImage} setOpen={setOpen} />}</div>
    </Fragment>
  );
};

Gallery.defaultProps = {
  images: [],
};

export default Gallery;
