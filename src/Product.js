function Product({ product, addToBasket, removeFromBasket, basket }) {

  const styles = {
    border: "1px solid #000",
    backgroundColor: product.soldOut ? "red" : "white",
  };

  const found = basket.filter((item) => item.key === product.name)[0];

  let count = 0;

  if (found) {
    count = found.amount;
  }

  return (
    <div className="Product" style={styles}>
      <div className={"product_img"}>
        <img src={`./images/${product.label}`} alt="Product" />
      </div>

      <h1>{product.name}</h1>
      <p>{product.description.overallImpression}</p>
      <span className="ProductPrice">50 DKK</span>
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
