import Product from "./Product.js";
import FilterNav from "./FilterNav.js";

function ProductList({ btnCategories, products, filteredBeers, addToBasket, removeFromBasket, basket, taps, setCategory }) {
  const productlist = filteredBeers.map((tap) => <Product className="product" tap={tap} filteredBeers={filteredBeers} basket={basket} products={products} key={tap.name} addToBasket={addToBasket} removeFromBasket={removeFromBasket}></Product>);

  return (
    <>
      <div className="product_list">
        <FilterNav setCategory={setCategory} btnCategories={btnCategories} products={products} taps={taps} filteredBeers={filteredBeers} />
        {productlist}
      </div>
    </>
  );
}

export default ProductList;
