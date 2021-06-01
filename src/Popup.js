import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <span className="close-icon" onClick={props.handleClose}>
        x
        </span>
      <div className="box">
        <div className="text_column">
          <h1>{props.name}</h1>
          <p>Alcohol: {props.alcohol}%</p>
          <p>Appearance: {props.appearance}</p>
          <p>Mouthfeel: {props.mouthfeel}</p>
          <p>Price: {props.price} DKK</p>

        </div>
        <div className="img_column">
          <img src={`../images/${props.label}`} alt="Product" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
