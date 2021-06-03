export default function PaymentBasket({ basket }) {
    return (
        <ul className="payment_basket">
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
            <div className="basket_item">
                <div className={"basket_item_img"}>
                    <img src={`./images/${props.product.label}`} alt="Product" />
                </div>
                <h3 className="basket_item_heading">{props.amount} x {props.product.name}</h3>
                <span className="basket_item_price">{totalpriceItem} DKK</span>
            </div>
        </li>
    );
}