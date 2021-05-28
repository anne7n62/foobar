import { useHistory } from "react-router-dom";

import React from "react";
import { useState } from "react";
import { Input } from "antd";
import InputMask from "react-input-mask";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "antd/dist/antd.css";

import postData from "./Post";
import PaymentBasket from "./PaymentBasket";

function Payment(props) {
  let filteredPostOrders = props.basket.map((order) => {
    return { name: order.product.name, amount: Number(order.amount) };
  });

  let location = useHistory();

  console.log(filteredPostOrders);

  return (
    <div className="Payment">
      <div className="BasketDetails">
        <h1>Basket details</h1>
        <PaymentBasket {...props} />
        <p>Total:</p>
        <span className="TotalPrice">500 DKK</span>
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
          <button type="primary" className="SubmitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function orderSubmit(fullData) {
  postData(fullData, "https://dreaming-of-foobar.herokuapp.com/order", (data) => {
    return data.message === "Order went through" ? <div></div> : <div> error </div>;
  });
}

class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    cardnumberValid: true,
    dateValid: true,
    // visibility: 'none',
  };

  // changeMessageVisibility = () => {
  //   this.setState({
  //     visibility: 'visible'
  //   })
  // }

  _renderCard = () => () => {
    const [cardnumber] = useState("");

    return <div>{cardnumber}</div>;
  };

  _renderName = () => () => {
    const [name] = useState("");

    return <div>{name}</div>;
  };

  _renderExpiration = () => () => {
    const [monthYear] = useState("");

    return <div>{monthYear}</div>;
  };

  handleInputBlurCC = (e) => {
    if (e.target.value.length != 19) {
      this.setState({ cardnumberValid: false });
      // this.errorCC.style={{display: visible }}
    } else {
      this.setState({ cardnumberValid: true });
    }
  };

  handleInputBlurDate = (e) => {
    if (e.target.value.length != 5) {
      this.setState({ dateValid: false });
    } else {
      this.setState({ dateValid: true });
    }
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards cvc={this.state.cvc} expiry={this.state.expiry} focused={this.state.focus} name={this.state.name} number={this.state.number} />
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Input name="name" type="text" placeholder="Enter your full name" required minLength="2" value={this.name} onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
          <p class="error-message">Please enter your full name</p>
        </div>

        <div className="form-control">
          <label htmlFor="cardnumber">Card number</label>

          <InputMask
            name="number"
            id="cardnumber"
            placeholder="Enter your card no."
            type="text"
            required
            minLength="19"
            mask="9999 9999 9999 9999"
            value={this.number}
            maskChar=""
            className={`ant-input ${this.state.cardnumberValid ? "" : "custom"}`}
            onBlur={this.handleInputBlurCC}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          ></InputMask>
          <p class="error-message">Card no. is 16 digits</p>
        </div>

        <div className="form-control">
          <label htmlFor="monthyear">Expiration date</label>
          <InputMask
            name="monthyear"
            id="monthyear"
            mask="99/99"
            minLength="5"
            type="text"
            placeholder="Enter month/year, ex: 12/05"
            className={`ant-input ${this.state.dateValid ? "" : "custom"}`}
            maskChar=""
            required
            value={this.monthyear}
            onBlur={this.handleInputBlurDate}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          ></InputMask>
          <p class="error-message" id="Dateerror">
            Please enter mm/yy
          </p>
        </div>

        <div className="form-control">
          <label htmlFor="monthyear">CVC</label>
          <Input placeholder="Enter CVC, ex: 232" minLength="3" maxLength="3" maskChar="" name="cvc" className="ant-input" required value={this.cvc} onChange={this.handleInputChange} onFocus={this.handleInputFocus}></Input>
          <p class="error-message">The 3 numbers on the back of your card</p>
        </div>
      </div>
    );
  }
}

export default Payment;
