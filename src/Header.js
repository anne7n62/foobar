import PopupBasket from "./PopupBasket";

import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ basket, addToBasket, removeFromBasket }) {

  // Basket popup in mobile using state

  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const toggleBasketPopup = () => {
    setPopupIsOpen(!popupIsOpen);
  };

  return (
    <header>
      <Link to="/"><img src={`./images/foobar_logo.svg`} className="logo" alt="Logo" /></Link>
      <div className="dashboard_navigation">
        <button className="basket_btn" onClick={toggleBasketPopup}></button>
        {popupIsOpen && <PopupBasket handleClose={toggleBasketPopup} basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} />}
        <button className="notification_btn"></button>
        <button className="settings_btn"></button>
      </div>
    </header>
  );
}

export default Header;