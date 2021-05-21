function Product({ products, addToBasket, removeFromBasket, filteredBeers, basket, tap }) {
  //vi laver et objekt
  const infoObject = tap;

  // const styles = {
  //   border: "1px solid #000",
  //   backgroundColor: infoObject.soldOut ? "red" : "white",
  // };

  const found = basket.filter((item) => item.key === infoObject.name)[0];

  let count = 0;

  if (found) {
    count = found.amount;
  }

  return (
    <div className="Product">
      <div className={"product_img"}>
        <img src={`./images/${infoObject.label}`} alt="Product" />
      </div>

      <h1>{infoObject.name}</h1>
      <p>{infoObject.description.overallImpression}</p>
      <span className="ProductPrice">{infoObject.price} DKK</span>
      <div className="counter">
        {/* <button onClick={decreaseAmount}>-</button>
        <input type="text" onChange={enterAmount} value={amount} /> */}
        <button disabled={count === 0} onClick={() => removeFromBasket(infoObject)}>
          -
        </button>
        <input type="text" value={count} onChange="" />
        <button onClick={() => addToBasket(infoObject)}>+</button>
      </div>
    </div>
  );
}

export default Product;
