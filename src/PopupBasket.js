import React from "react";
import MyBasket from "./MyBasket";
import BasketMessage from "./BasketMessage";

const PopupBasket = (props) => {
    return (
        <div className="basket-popup-box" onClick={props.handleClose}>
            <div className="basket-box">
                <span className="basket-close-icon" onClick={props.handleClose}>x</span>
                <div className="Basket_popup">
                    <h2>Basket</h2>
                    {props.basket.length > 0 && <MyBasket {...props}></MyBasket>}
                    {props.basket.length === 0 && <BasketMessage></BasketMessage>}
                </div>
            </div>
        </div>
    );
};

export default PopupBasket;
