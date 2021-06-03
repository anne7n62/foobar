import React from "react";

const Popup = (props) => {
  return (
    <div className="popup_box" onClick={props.handleClose}>
      <div className="box">
        <span className="close_icon" onClick={props.handleClose}>
          x
        </span>
        <div className="text_column">
          <h1>{props.name}</h1>
          <span className="popup_category">{props.category}</span>
          <p className="popup_alcohol">Alcohol: {props.alcohol}%</p>
          <p>Appearance: {props.appearance}</p>
          <p>Mouthfeel: {props.mouthfeel}</p>
          <p className="popup_price">{props.price} DKK</p>

        </div>
        <div className="img_column">
          <img src={`.././images/${props.label}`} alt="Product" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
