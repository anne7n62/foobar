import BasketMessage from "./BasketMessage";
import { useState } from "react";

function MyBasket({ basket, ...rest }) {
  console.log(rest);
  return (
    <>
      <ul>
        {basket.map((item) => (
          <BasketItem {...item} addToBasket={rest.addToBasket} removeFromBasket={rest.removeFromBasket}></BasketItem>
        ))}
      </ul>
      {basket.length < 1 && <BasketMessage />}
    </>
  );
}

function BasketItem(props) {
  // console.log(props);

  // const [amount, setAmount] = useState(0);

  // function decreaseAmount() {
  //   setAmount((prev) => (prev > 0 ? prev - 1 : prev));
  // }

  // function increaseAmount() {
  //   setAmount((prev) => prev + 1);
  // }

  // function enterAmount(event) {
  //   console.log(`Entered amount ${event.target.value}`);
  //   setAmount((prev) => Number(event.target.value));
  // }

  return (
    <li>
      {props.product.name}
      <div className="counter">
        <button onClick={() => props.removeFromBasket(props.product)}>-</button>
        <input type="text" disabled value={props.count} />
        <button onClick={() => props.addToBasket(props.product)}>+</button>
      </div>
    </li>
  );
}

export default MyBasket;
