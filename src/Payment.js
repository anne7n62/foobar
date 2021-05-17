import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Payment(props) {
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
                <Link to="/thanks"><button className="SubmitButton">Complete order</button></Link>
            </div>
        </div>
    );
}

function PaymentBasket({ basket }) {
    return (
        <ul className="PaymentBasket">
            {basket.map((item) => (
                <PaymentBasketItem {...item} />
            ))}
        </ul>
    );
}

function PaymentBasketItem(props) {
    return (
        <li>
            <div className="BasketItem">
                <div className={"BasketItemImg"}>
                    <img src={`./images/${props.product.label}`} alt="Product" />
                </div>
                <h3 className="BasketItemHeading">{props.product.name}</h3>
                <p className="BasketItemAmount">{props.amount}</p>
                <span className="BasketItemPrice">50 DKK</span>
            </div>
        </li>
    );
}

export default Payment;
