export default function PaymentBasket({ basket }) {
    return (
        <ul className="PaymentBasket">
            {basket.map(item => (
                <PaymentBasketItem {...item} />
            ))}
        </ul>
    );
}

function PaymentBasketItem(props) {

    const totalpriceItem = props.product.price * props.amount;

    return (
        <li>
            <div className="BasketItem">
                <div className={"BasketItemImg"}>
                    <img src={`./images/${props.product.label}`} alt="Product" />
                </div>
                <h3 className="BasketItemHeading">{props.amount} x {props.product.name}</h3>
                <span className="BasketItemPrice">{totalpriceItem} DKK</span>
            </div>
        </li>
    );
}