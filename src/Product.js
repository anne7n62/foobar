import { useState } from "react";

function Product({ product, addToBasket, removeFromBasket, basket }) {
  const styles = {
    border: "1px solid #000",
    backgroundColor: product.soldOut ? "red" : "tan",
  };

  // const [amount, setAmount] = useState(0);

  // function decreaseAmount() {
  //   setAmount((prev) => (prev > 0 ? prev - 1 : prev));
  // }

  // function increaseAmount() {
  //   setAmount((prev) => prev + 1);
  // }

  // function enterAmount(event) {
  //   console.log(`Entered amount ${event.target.value}`);
  //   setAmount((prev) => Number(event.target.value));
  // }

  const found = basket.filter((item) => item.key === product.name)[0];
  let count = 0;
  if (found) {
    count = found.amount;
  }
  console.log(count);
  return (
    <div className="Product" style={styles}>
      <div className={"product_img"}>
        <img src={`./images/${product.label}`} alt="Product" />
      </div>

      <h1>{product.name}</h1>
      <p>{product.description.overallImpression}</p>
      <p>Pris</p>
      <div className="counter">
        {/* <button onClick={decreaseAmount}>-</button>
        <input type="text" onChange={enterAmount} value={amount} /> */}
        <button disabled={count === 0} onClick={() => removeFromBasket(product)}>
          -
        </button>
        <input type="text" value={count} />
        <button onClick={() => addToBasket(product)}>+</button>
      </div>
    </div>
  );
}

export default Product;
