import { Link } from "react-router-dom";

import BasketMessage from "./BasketMessage";
import BasketItem from "./BasketItem";

function MyBasket({ basket, setBasket, ...rest }) {
  const totalArr = basket.map((beer) => {
    const priceObject = beer.amount * beer.product.price;

    return priceObject;
  });

  const totalAmount = totalArr.reduce((previousScore, currentScore, index) => previousScore + currentScore, 0);

  return (
    <>
      <div className="clear_basket">
        <button onClick={() => console.log("clear")}>Clear</button>
      </div>
      <ul className="BasketList">
        {basket.map((item) => (
          <BasketItem {...item} addToBasket={rest.addToBasket} removeFromBasket={rest.removeFromBasket}></BasketItem>
        ))}
      </ul>
      {basket.length < 1 && <BasketMessage />}
      <div className="total_container">
        <p className="total">Total:</p>
        <span className="total_amount">{totalAmount} DKK</span>
      </div>
      <Link to="/payment">
        <button className="SubmitButton">Go to payment</button>
      </Link>
    </>
  );
}

export default MyBasket;
