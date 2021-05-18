import Product from "./Product.js";

function ProductList({ products, addToBasket, removeFromBasket, basket, taps }) {
  const productlist = taps.map((tap) => <Product className="Product" tap={tap} basket={basket} products={products} key={tap.id} addToBasket={addToBasket} removeFromBasket={removeFromBasket}></Product>);

  return <div className="ProductList">{productlist}</div>;
}

export default ProductList;
