import MyBasket from "./MyBasket.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Basket(props) {
  return (
    <div className="Basket">
      <MyBasket {...props}></MyBasket>
      {props.basket.length > 0 && <BasketTotal />}
      {props.basket.length > 0 && <SubmitButton></SubmitButton>}
    </div>
  );
}

function BasketTotal() {
  return (
    <div className="BasketTotal">
      <p>Total:</p>
      <span className="TotalPrice">500 DKK</span>
    </div>
  );
}

function SubmitButton() {
  return <Link to="/payment"><button className="SubmitButton">Go to payment</button></Link>;
}

export default Basket;
