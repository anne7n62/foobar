import {useState, useEffect} from "react";

// import logo from './logo.svg';¨
import SimpleNav from './SimpleNav.js';
import ProductList from './ProductList.js';
import Basket from './Basket.js';
import './App.css';

function App() {

  const [products,setProducts] = useState( [] );
    
  const [basket,setBasket] = useState([]);
  

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products?limit=50")
    .then( resp => resp.json() )
    .then( json => setProducts(json));
  },[]);


  function addToBasket( product ) {
    /* console.log("add to basket called!");
     console.log(product);
     const productInBasket = { 
       product: product,
       count: 1
     }; */

    // Check if a product of this type is already in the basket
    const productInBasket = basket.find(item => item.product.id === product.id);
    if(productInBasket) {
      // put one more product of that type in the basket
      productInBasket.count++;
      // update the state with all the same items, but one of them updated!
      setBasket( prevState => prevState.map(item => item) );
    } else {
      // put the product in the basket for the first time
      setBasket( prevState => prevState.concat( {product, count: 1, key: product.id} ));
    }
  }


  function addProduct() {
    setProducts( prevState => prevState.concat({
      id: 1533,
      gender: "Uni",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Harness",
      season: "all",
      productionyear: 2020,
      usagetype: "Strict",
      productdisplayname: "Cat harness for walking",
      price: 95,
      discount: null,
      brandname: "Wolf",
      soldout: 1,
    }) )
  }

  return (
    <><button onClick={addProduct}>Add new Product</button>
    <div className="App">
      <SimpleNav></SimpleNav>
      <ProductList products={products} addToBasket={addToBasket}/>
      <Basket basket={basket}/>
    </div>
    </>
  );
}

export default App;
