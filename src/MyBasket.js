import { Link } from "react-router-dom";

import BasketMessage from "./BasketMessage";
import BasketItem from "./BasketItem";

function MyBasket({ basket, setBasket, ...rest }) {

  // Calculate total for each beer with amount * price
  const totalArr = basket.map((beer) => {
    const priceObject = beer.amount * beer.product.price;

    return priceObject;
  });

  // Calculate total amount of basket using reduce
  const totalAmount = totalArr.reduce((previousScore, currentScore) => previousScore + currentScore);

  return (
    <>
      {/* <div className="clear_basket">
        <button onClick={() => console.log("clear")}>Clear</button>
      </div> */}
      <ul className="basket_list">
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
        <button className="submit_button">Go to payment</button>
      </Link>
    </>
  );
}

export default MyBasket;
