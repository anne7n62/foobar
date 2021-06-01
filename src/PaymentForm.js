import React from "react";
import { useState } from "react";
import { Input } from "antd";
import InputMask from "react-input-mask";
import Cards from "react-credit-cards";

class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    cardnumberValid: true,
    dateValid: true,
    cvcValid: true,
    nameValid: true,
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

  handleInputBlurName = (e) => {
    if (e.target.value.length < 2) {
      this.setState({ nameValid: false });
      // this.errorCC.style={{display: visible }}
    } else {
      this.setState({ nameValid: true });
    }
  };

  handleInputBlurCC = (e) => {
    if (e.target.value.length !== 19) {
      this.setState({ cardnumberValid: false });
      // this.errorCC.style={{display: visible }}
    } else {
      this.setState({ cardnumberValid: true });
    }
  };

  handleInputBlurCvc = (e) => {
    if (e.target.value.length !== 3) {
      this.setState({ cvcValid: false });
      // this.errorCC.style={{display: visible }}
    } else {
      this.setState({ cvcValid: true });
    }
  };

  handleInputBlurDate = (e) => {
    if (e.target.value.length !== 5) {
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
          <Input name="name" type="text" placeholder="Enter your full name" required minLength="2" value={this.name} onChange={this.handleInputChange} onBlur={this.handleInputBlurName} onFocus={this.handleInputFocus} />
          <p className={`${this.state.nameValid ? "hidden" : "error-message"}`}>Please enter your full name</p>
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
          <p className={`${this.state.cardnumberValid ? "hidden" : "error-message"}`}>Please enter a valid CC number</p>
        </div>

        <div className="form-control">
          <label htmlFor="monthyear">Expiration date</label>
          <InputMask
            name="expiry"
            id="monthyear"
            mask="99/99"
            minLength="5"
            type="text"
            placeholder="Enter expiration date"
            className={`ant-input ${this.state.dateValid ? "" : "custom"}`}
            maskChar=""
            required
            value={this.monthyear}
            onBlur={this.handleInputBlurDate}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          ></InputMask>
          <p className={`${this.state.dateValid ? "hidden" : "error-message"}`} id="Dateerror">
            Please enter mm/yy
          </p>
        </div>

        <div className="form-control">
          <label htmlFor="monthyear">CVC</label>
          <Input
            placeholder="Enter CVC"
            minLength="3"
            maxLength="3"
            maskChar=""
            name="cvc"
            className={`ant-input ${this.state.cvcValid ? "" : "custom"}`}
            required
            value={this.cvc}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          ></Input>
          <p className={`${this.state.cvcValid ? "hidden" : "error-message"}`}>The 3 numbers on the back of your card</p>
        </div>
      </div>
    );
  }
}

export default PaymentForm;
