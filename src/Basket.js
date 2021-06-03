import BasketMessage from "./BasketMessage.js";
import MyBasket from "./MyBasket.js";

function Basket(props) {
  return (
    <div className="basket_container">
      <h1>Order</h1>
      <div className="basket">
        <h2>Basket</h2>
        {props.basket.length > 0 && <MyBasket {...props}></MyBasket>}
        {props.basket.length === 0 && <BasketMessage></BasketMessage>}
      </div>
    </div>
  );
}

export default Basket;
