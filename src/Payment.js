import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "react-credit-cards/es/styles-compiled.css";
import "antd/dist/antd.css";

import postData from "./Post";
import PaymentBasket from "./PaymentBasket";
import PaymentForm from "./PaymentForm";

function Payment(props) {
  // Defining the items in basket
  let filteredPostOrders = props.basket.map((order) => {
    return { name: order.product.name, amount: Number(order.amount) };
  });

  let location = useHistory();

  const totalArr = props.basket.map((beer) => {
    const priceObject = beer.amount * beer.product.price;
    return priceObject;
  });

  // Calculate total amount of basket using reduce
  const totalAmount = totalArr.reduce((previousScore, currentScore) => previousScore + currentScore, 0);

  function orderSubmit(fullData) {
    postData(fullData, "https://dreaming-of-foobar.herokuapp.com/order", (data) => {
      return data.message === "added" ? (
        <div>
          {props.setOrderId(data.id)}
        </div>
      ) : null;
    });
  }

  return (
    <div className="Payment">
      <div className="bg_text">
        <h1>Foobar</h1>
      </div>
      <div className="payment_column">
        <h1>Order details</h1>
        <div className="BasketDetails">
          <Link to="/">
            <button className="back_btn">Go back</button>
          </Link>
          <PaymentBasket {...props} />
          <div className="total_container">
            <p className="total">Total:</p>
            <span className="total_amount">{totalAmount} DKK</span>
          </div>
        </div>
      </div>
      <div className="payment_column">
        <h1>Payment</h1>
        <div className="PaymentDetails">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              orderSubmit(filteredPostOrders);
              location.push("/thanks");
            }}
          >
            <PaymentForm />
            <button className="SubmitButton" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
