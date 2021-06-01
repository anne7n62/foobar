import { useHistory } from "react-router-dom";
import "react-credit-cards/es/styles-compiled.css";
import "antd/dist/antd.css";

import postData from "./Post";
import PaymentBasket from "./PaymentBasket";
import PaymentForm from "./PaymentForm";

function Payment(props) {
  let filteredPostOrders = props.basket.map((order) => {
    return { name: order.product.name, amount: Number(order.amount) };
  });

  let location = useHistory();

  console.log(filteredPostOrders);

  const totalArr = props.basket.map((beer) => {
    const priceObject = beer.amount * beer.product.price;

    return priceObject;
  });

  const totalAmount = totalArr.reduce((previousScore, currentScore, index) => previousScore + currentScore, 0);

  function orderSubmit(fullData) {
    postData(fullData, "https://dreaming-of-foobar.herokuapp.com/order", (data) => {
      return data.message === "added" ? (
        <div>
          {props.setOrderId(data.id)}
          {console.log(data.id)}
        </div>
      ) : null;
    });
  }

  return (
    <div className="Payment">
      <div className="BasketDetails">
        <h1>Basket details</h1>
        <PaymentBasket {...props} />
        <div className="total_container">
          <p className="total">Total:</p>
          <span className="total_amount">{totalAmount} DKK</span>
        </div>
      </div>
      <div className="PaymentDetails">
        <h1>Payment Details</h1>
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
  );
}

export default Payment;
