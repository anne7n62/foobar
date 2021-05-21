import BasketMessage from "./BasketMessage.js";
import MyBasket from "./MyBasket.js";

function Basket(props) {
  return (
    <div className="Basket">
      {props.basket.length > 0 && <MyBasket {...props}></MyBasket>}
      {props.basket.length === 0 && <BasketMessage></BasketMessage>}
    </div>
  );
}

export default Basket;
