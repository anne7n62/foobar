import Product from "./Product.js";

function ProductList({ products, addToBasket, removeFromBasket, basket }) {
  const productlist = products.map((product) => <Product className="Product" basket={basket} product={product} key={product.name} addToBasket={addToBasket} removeFromBasket={removeFromBasket}></Product>);

  return <div className="ProductList">{productlist}</div>;
}

export default ProductList;
