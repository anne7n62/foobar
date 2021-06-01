import React, { useState } from "react";
import Popup from "./Popup.js";

function Product({ products, addToBasket, removeFromBasket, filteredBeers, basket, tap }) {
  //popop
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  //vi laver et objekt
  const infoObject = tap;

  // const styles = {
  //   border: "1px solid #000",
  //   backgroundColor: infoObject.soldOut ? "red" : "white",
  // };

  const found = basket.filter((item) => item.key === infoObject.name)[0];

  let count = 0;

  if (found) {
    count = found.amount;
  }

  return (
    <div className="Product">
      <div className={"product_img"}>
        <img src={`./images/${infoObject.label}`} alt="Product" />
      </div>
      <div class="product_details">
        <h1>{infoObject.name}</h1>
        <p>{infoObject.description.overallImpression}</p>
        <span className="ProductPrice">{infoObject.price} DKK</span>
        <div className="counter">
          {/* <button onClick={decreaseAmount}>-</button>
        <input type="text" onChange={enterAmount} value={amount} /> */}
          <button disabled={count === 0} onClick={() => removeFromBasket(infoObject)}>
            -
        </button>
          <span className="counterNumber">{count}</span>
          <button onClick={() => addToBasket(infoObject)}>+</button>

          <button onClick={togglePopup}>More info</button>
          {isOpen && <Popup handleClose={togglePopup} price={infoObject.price} name={infoObject.name} appearance={infoObject.description.appearance} mouthfeel={infoObject.description.mouthfeel} alcohol={infoObject.alc} />}
        </div>
      </div>
    </div>
  );
}

export default Product;
