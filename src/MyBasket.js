import { BrowserRouter as Switch, Link } from "react-router-dom";

import BasketMessage from "./BasketMessage";

function MyBasket({ basket, ...rest }) {

  const totalArr = basket.map((beer) => {

    const priceObject = beer.amount * beer.product.price;

    return priceObject;
  });

  const totalAmount = totalArr.reduce(
    (previousScore, currentScore, index) => previousScore + currentScore,
    0);

  return (
    <>
      <ul className="BasketList">
        {basket.map((item) => (
          <BasketItem {...item} addToBasket={rest.addToBasket} removeFromBasket={rest.removeFromBasket}></BasketItem>
        ))}
      </ul>
      {basket.length < 1 && <BasketMessage />}
      <p>Total:</p>
      <span className="">{totalAmount} DKK</span>
      <Link to="/payment">
        <SubmitButton></SubmitButton>
      </Link>
    </>
  );
}

function SubmitButton() {
  return <button className="SubmitButton">Go to payment</button>;
}

function BasketItem(props) {
  const newBeerPrice = props.amount * props.product.price;

  return (
    <li>
      <div className="BasketItem">
        <div className={"BasketItemImg"}>
          <img src={`./images/${props.product.label}`} alt="Product" />
        </div>
        <h3 className="BasketItemHeading">{props.product.name}</h3>
        <div className="counter">
          <button onClick={() => props.removeFromBasket(props.product)}>-</button>
          <input type="text" disabled value={props.amount} />
          <button onClick={() => props.addToBasket(props.product)}>+</button>
        </div>
        <span className="BasketItemPrice">{newBeerPrice}</span>
      </div>
    </li>
  );
}

export default MyBasket;
