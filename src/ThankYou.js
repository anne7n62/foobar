import { Link } from "react-router-dom";

function ThankYou(props) {
  console.log("Thank you");

  return (
    <div className="ThankYou">
      <div className="thankyou_content">
        <h1>Thank you!</h1>
        <h3>Order id: {props.orderId}</h3>
        <p>We have now received your order and we will serve you as soon as possible</p>
        <Link to="/">
          <button className="thankyou_btn">Order more</button>
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
