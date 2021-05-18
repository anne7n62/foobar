// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

// function Payment(props) {
//   return (
//     <div className="Payment">
//       <div className="BasketDetails">
//         <h1>Basket details</h1>
//         <PaymentBasket {...props} />
//         <p>Total:</p>
//         <span className="TotalPrice">500 DKK</span>
//       </div>
//       <div className="PaymentDetails">
//         <h1>Payment Details</h1>
//         <Link to="/thanks">
//           <button className="SubmitButton">Complete order</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// function PaymentBasket({ basket }) {
//   return (
//     <ul className="PaymentBasket">
//       {basket.map(item => (
//         <PaymentBasketItem {...item} />
//       ))}
//     </ul>
//   );
// }

// function PaymentBasketItem(props) {
//   return (
//     <li>
//       <div className="BasketItem">
//         <div className={"BasketItemImg"}>
//           <img src={`./images/${props.product.label}`} alt="Product" />
//         </div>
//         <h3 className="BasketItemHeading">{props.product.name}</h3>
//         <p className="BasketItemAmount">{props.amount}</p>
//         <span className="BasketItemPrice">50 DKK</span>
//       </div>
//     </li>
//   );
// }

// export default Payment;

//NPM creditcard package
export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            maxLength="16"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="name"
            placeholder="Cardholder"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="expiry"
            maxLength="4"
            placeholder="Expiration Date"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            maxLength="3"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </form>
      </div>
    );
  }
}
