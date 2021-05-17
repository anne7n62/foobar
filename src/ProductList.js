import Product from './Product.js';

function ProductList({products,addToBasket}) {
  const productlist = products.map( product => <Product product={product} key={product.id} addToBasket={addToBasket}></Product> );

  return (
    <div className="ProductList">
        {productlist}
    </div>
  )
}

export default ProductList;