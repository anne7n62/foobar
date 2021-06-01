function BasketItem(props) {
  const newBeerPrice = props.amount * props.product.price;

  return (
    <li>
      <div className="BasketItem">
        <div className={"BasketItemImg"}>
          <img src={`./images/${props.product.label}`} alt="Product" />
        </div>
        <h3 className="BasketItemHeading">{props.product.name}</h3>
        <div className="counter">
          <button onClick={() => props.removeFromBasket(props.product)}>-</button>
          <input type="text" disabled value={props.amount} />
          <button onClick={() => props.addToBasket(props.product)}>+</button>
        </div>
        <span className="BasketItemPrice">{newBeerPrice} DKK</span>
      </div>
    </li>
  );
}

export default BasketItem;
