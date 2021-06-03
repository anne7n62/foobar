function BasketItem(props) {
  const newBeerPrice = props.amount * props.product.price;

  return (
    <li className="list">
      <div className="basket_item">
        <div className={"basket_item_img"}>
          <img src={`./images/${props.product.label}`} alt="Product" />
        </div>
        <h3 className="basket_item_heading">{props.product.name}</h3>
        <div className="counter">
          <button onClick={() => props.removeFromBasket(props.product)}>-</button>
          <span className="counter_number_basket">{props.amount}</span>
          <button onClick={() => props.addToBasket(props.product)}>+</button>
        </div>
        <span className="basket_item_price">{newBeerPrice} DKK</span>
      </div>
    </li>
  );
}

export default BasketItem;
