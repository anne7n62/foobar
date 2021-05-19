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

    // const basketArray = [];


    // vi kender props.product.name
    // vi kender props.amount

    return (
        <li>
            <div className="BasketItem">
                <div className={"BasketItemImg"}>
                    <img src={`./images/${props.product.label}`} alt="Product" />
                </div>
                <h3 className="BasketItemHeading">{props.product.name}</h3>
                <p className="BasketItemAmount">{props.amount}</p>
                <span className="BasketItemPrice">{props.product.price} DKK</span>
            </div>
        </li>
    );
}