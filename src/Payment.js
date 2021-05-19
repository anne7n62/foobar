import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "react-credit-cards/es/styles-compiled.css";

import React from 'react';
import Cards from 'react-credit-cards';

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

    // Kommentar onsdag, Louise: Lige nu virker post af basket ordren,
    // men den poster når man kommer til payment siden og ikke ved klik på knappen.

    // poster 2 gange??

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
                <button onclick={orderSubmit(filteredPostOrders)}>Test</button>
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
                <div> Something went wrong, Please Refresh and try again </div>
            );
        }
    );
}

// NPM creditcard package
class PaymentForm extends React.Component {

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

export default Payment;
