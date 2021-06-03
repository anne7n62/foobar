import React, { useState } from "react";
import Popup from "./Popup.js";

function Product({ addToBasket, removeFromBasket, basket, tap }) {
  // Popup using state
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const infoObject = tap;
  const found = basket.filter((item) => item.key === infoObject.name)[0];

  // Setting counter in amount button, if product is in basket, match the counter
  let count = 0;
  if (found) {
    count = found.amount;
  }

  return (
    <div className="Product">
      <div className={"product_img"} onClick={togglePopup}>
        <img src={`./images/${infoObject.label}`} alt="Product" />
      </div>
      <div className="product_details">
        <h1>{infoObject.name}</h1>
        <span className="ProductPrice">{infoObject.price} DKK</span>
        <div className="counter">
          <button disabled={count === 0} onClick={() => removeFromBasket(infoObject)}>-</button>
          <span className="counterNumber">{count}</span>
          <button onClick={() => addToBasket(infoObject)}>+</button>
        </div>
        {isOpen && <Popup handleClose={togglePopup} price={infoObject.price} name={infoObject.name} appearance={infoObject.description.appearance} mouthfeel={infoObject.description.mouthfeel} alcohol={infoObject.alc} category={infoObject.category} label={infoObject.label} />}
      </div>
    </div>
  );
}

export default Product;
