import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React from 'react';
import { useState, useEffect } from "react";
import { Input } from "antd";
import InputMask from "react-input-mask";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import "antd/dist/antd.css";

import postData from "./Post";
import PaymentBasket from "./PaymentBasket";

function Payment(props) {

    let filteredPostOrders = props.basket.map(order => {
        return { name: order.product.name, amount: Number(order.amount) };
    });

    // Skal vi bruge denne?
    // filteredPostOrders = filteredPostOrders.filter(order => {
    //     return order !== undefined;
    // });

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
                <PaymentForm />
                <button onClick={() => orderSubmit(filteredPostOrders)}>Test</button>
                <Link to="/thanks">
                    <button className="SubmitButton">Complete order</button>
                </Link>
            </div>
        </div>
    );
}


function orderSubmit(fullData) {
    postData(
        fullData,
        'https://dreaming-of-foobar.herokuapp.com/order',
        data => {
            return data.message === 'Order went through' ? (
                <div>
                    <h1>success</h1>
                </div>
            ) : (
                <div> error </div>
            );
        }
    );
}

// Mangler validering....

class PaymentForm extends React.Component {

    state = {
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
    };

    _renderCard = () => () => {
        const [cardnumber, setCardnumber] = useState("");

        return <div>{cardnumber}</div>
    }

    _renderName = () => () => {
        const [name, setName] = useState("");

        return <div>{name}</div>
    }

    _renderExpiration = () => () => {
        const [monthYear, setMonthYear] = useState("");

        return <div>{monthYear}</div>
    }

    handleInputFocus = e => {
        this.setState({ focus: e.target.name });
    };

    handleInputChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    render() {

        // const [isValid, setIsValid] = useState(false);

        // const form = useRef(null);

        // useEffect(() => {
        //   const isCreditCardValid = cardnumber.replaceAll(" ", "").length === 16;
        //   const isMonthYearValid = monthYear.replace("/", "").length === 4;
        //   setIsValid(
        //     form.current.checkValidity() && isMonthYearValid && isCreditCardValid
        //   );
        // }, [name, cardnumber, monthYear]);

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
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <Input
                            name="name"
                            type="text"
                            required
                            minLength="2"
                            value={this.name}
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="cardnumber">Card number</label>
                        <InputMask name="number"
                            mask="9999 9999 9999 9999"
                            value={this.cardnumber}
                            maskChar=""
                            className="ant-input"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="monthyear">Expiration date</label>
                        <InputMask
                            mask="99/99"
                            maskChar=""
                            name="expiry"
                            className="ant-input"
                            required
                            value={this.monthYear}
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            minLength="17"
                        ></InputMask>
                    </div>
                    <div className="form-control">
                        <label htmlFor="monthyear">CVC</label>
                        <InputMask
                            mask="999"
                            maskChar=""
                            name="cvc"
                            className="ant-input"
                            required
                            value={this.cvc}
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            minLength="17"
                        ></InputMask>
                    </div>
                    {/*<Button type="primary" htmlType="submit" disabled={!isValid}>Submit</Button>*/}
                </form>
            </div >
        );
    }
}

export default Payment;
