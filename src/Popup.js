import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <h1>{props.name}</h1>
        <p>Alcohol: {props.alcohol}%</p>
        <p>Appearance: {props.appearance}</p>
        <p>Mouthfeel: {props.mouthfeel}</p>
        <p>Price: {props.price} DKK</p>
      </div>
    </div>
  );
};

export default Popup;