import BasketMessage from "./BasketMessage";

function MyBasket({ basket, ...rest }) {
  return (
    <>
      <ul className="BasketList">
        {basket.map((item) => (
          <BasketItem {...item} addToBasket={rest.addToBasket} removeFromBasket={rest.removeFromBasket}></BasketItem>
        ))}
      </ul>
      {basket.length < 1 && <BasketMessage />}
      <BasketTotal basket={basket} />
    </>
  );
}

function BasketTotal({ basket }) {
  console.log(basket)

  return (
    <div className="BasketTotal">
      {basket.map((item) => (
        <EachBeerTotal  {...item} />
      ))}
      <p>Total:</p>
      <span className="TotalPrice">500 DKK</span>
    </div>
  );
}

function EachBeerTotal(props) {
  const eachBeerTotalPrice = props.amount * props.product.price;


  return (
    <>
      <p>{eachBeerTotalPrice}</p>
    </>
  );
}


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
        <span className="BasketItemPrice">{newBeerPrice}</span>
      </div>
    </li>
  );
}

export default MyBasket;
