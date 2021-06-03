import React from "react";
import MyBasket from "./MyBasket";
import BasketMessage from "./BasketMessage";

const PopupBasket = (props) => {
    return (
        <div className="basket_popup_box" onClick={props.handleClose}>
            <div className="basket_box">
                <span className="basket_close" onClick={props.handleClose}>x</span>
                <div className="basket_popup">
                    <h2>Basket</h2>
                    {props.basket.length > 0 && <MyBasket {...props}></MyBasket>}
                    {props.basket.length === 0 && <BasketMessage></BasketMessage>}
                </div>
            </div>
        </div>
    );
};

export default PopupBasket;
