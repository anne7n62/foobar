import BasketMessage from "./BasketMessage";

function MyBasket({ basket, ...rest }) {
  console.log(rest);
  return (
    <>
      <ul className="BasketList">
        {basket.map((item) => (
          <BasketItem {...item} addToBasket={rest.addToBasket} removeFromBasket={rest.removeFromBasket}></BasketItem>
        ))}
      </ul>
      {basket.length < 1 && <BasketMessage />}
    </>
  );
}

function BasketItem(props) {
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
        <span className="BasketItemPrice">50 DKK</span>
      </div>
    </li>
  );
}

export default MyBasket;
