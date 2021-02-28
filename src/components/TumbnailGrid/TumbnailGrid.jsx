import React from "react";
import "../TumbnailGrid/TumbnailGrid.css";

const TumbnailGrid = ({ images }) => {
  return (
    <div className="flex-grid">
      {images?.map((item) => (
        <div key={item.id} className="col">
          <img className="tumbnail" src={item.download_url} alt={item.id} />
        </div>
      ))}
    </div>
  );
};

TumbnailGrid.defaultProps = {
  images: [],
};

export default TumbnailGrid;
