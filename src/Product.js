import {useState} from "react";

function Product({product,addToBasket}) {
  const styles = {
    border: "1px solid #000",
    backgroundColor: product.soldOut ? "red" : "yellow",
  };

  const [amount, setAmount] = useState(0);

  function decreaseAmount() {
    setAmount((prev) => prev>0?prev-1:prev);
  }

  function increaseAmount() {
    setAmount((prev) => prev +1);
  }

  function enterAmount(event) {
    console.log(`Entered amount ${event.target.value}`);
    setAmount((prev) => (Number)(event.target.value));
  }

  return (
    <div className="Product" style={styles}>
      <h1>{product.productdisplayname?product.productdisplayname:product.title}</h1>
      <p>Category: {product.category}</p>
      <h2>{product.price?`only ${product.price},- kr`:""}</h2>
      <p>product details</p>
      <button onClick={() => addToBasket(product)}>Add to basket</button>
      <div className="counter">
        <button onClick={decreaseAmount}>-</button>
        <input type="text" onChange={enterAmount} value={amount}/>
        <button onClick={increaseAmount}>+</button>
      </div>
    </div>
  )
}

export default Product;