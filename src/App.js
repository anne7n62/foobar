import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProductList from "./ProductList.js";
import Basket from "./Basket.js";
import Payment from "./Payment.js";
import ThankYou from "./ThankYou.js";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch("https://dreaming-of-foobar.herokuapp.com/beertypes")
      .then((resp) => resp.json())
      .then((json) => setProducts(json));
  }, []);

  function addToBasket(product) {
    /* console.log("add to basket called!");
     console.log(product);
     const productInBasket = { 
       product: product,
       count: 1
     }; */

    // Check if a product of this type is already in the basket
    const productInBasket = basket.find((item) => item.product.name === product.name);
    if (productInBasket) {
      // put one more product of that type in the basket
      productInBasket.amount++;
      // update the state with all the same items, but one of them updated!
      setBasket((prevState) => prevState.map((item) => item));
    } else {
      // put the product in the basket for the first time
      setBasket((prevState) => prevState.concat({ product, amount: 1, key: product.name }));
    }
  }

  function removeFromBasket(product) {
    // Check if a product of this type is already in the basket
    const productInBasket = basket.find((item) => item.product.name === product.name);
    if (productInBasket) {
      // put one more product of that type in the basket
      productInBasket.amount--;
      // update the state with all the same items, but one of them updated!
      setBasket((prevState) => prevState.map((item) => item).filter((item) => item.amount > 0));
    }
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Shop</Link>
          <Link to="/payment">Payment</Link>
          <Link to="/thanks">Thanks</Link>
        </nav>
        <Switch>
          <Route path="/" exact render={() =>
            <main>
              <ProductList className="ProductList" products={products} addToBasket={addToBasket} removeFromBasket={removeFromBasket} basket={basket} />
              <Basket basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} />
            </main>
          } />
          <Route path="/payment" render={() => <Payment basket={basket} ></Payment>} />
          <Route path="/thanks" render={() => <ThankYou></ThankYou>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
