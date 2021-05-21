import { Link, useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom';

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

    let location = useHistory();

    console.log(filteredPostOrders);

    const totalArr = props.basket.map((beer) => {

        const priceObject = beer.amount * beer.product.price;

        return priceObject;
    });

    const totalAmount = totalArr.reduce(
        (previousScore, currentScore, index) => previousScore + currentScore,
        0);

    function orderSubmit(fullData) {
        postData(
            fullData,
            'https://dreaming-of-foobar.herokuapp.com/order',
            data => {
                return data.message === "added" ? (
                    <div>
                        {props.setOrderId(data.id)}
                        {console.log(data.id)}
                    </div>
                ) : null;
            }
        );
    }



    return (
        <div className="Payment">
            <div className="BasketDetails">
                <h1>Basket details</h1>
                <PaymentBasket {...props} />
                <p>Total:</p>
                <span className="TotalPrice">{totalAmount} DKK</span>
            </div>
            <div className="PaymentDetails">
                <h1>Payment Details</h1>
                <form onSubmit={e => {
                    e.preventDefault();
                    orderSubmit(filteredPostOrders);
                    location.push("/thanks");
                }}>
                    <PaymentForm />
                    <button type="primary" className="SubmitButton" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

class PaymentForm extends React.Component {

    state = {
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
    };

    _renderCard = () => () => {
        const [cardnumber] = useState("");

        return <div>{cardnumber}</div>
    }

    _renderName = () => () => {
        const [name] = useState("");

        return <div>{name}</div>
    }

    _renderExpiration = () => () => {
        const [monthYear] = useState("");

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
        return (
            <div id="PaymentForm">
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                />
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
            </div >
        );
    }
}

export default Payment;
