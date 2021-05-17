import MyBasket from "./MyBasket.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Basket(props) {
  return (
    <div className="Basket">
      <MyBasket {...props}></MyBasket>
      <div className="BasketTotal">
        <p>Total:</p>
        <span className="TotalPrice">500 DKK</span>
      </div>
      {props.basket.length > 0 && <SubmitButton></SubmitButton>}
    </div>
  );
}

function SubmitButton() {
  return <Link to="/payment"><button className="SubmitButton">Go to payment</button></Link>;
}

export default Basket;
