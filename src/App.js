import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProductList from "./ProductList.js";
import Basket from "./Basket.js";
import Payment from "./Payment.js";
import ThankYou from "./ThankYou.js";

import "./App.css";
import prices from "./prices.json";
console.log(prices);

function App() {
  const [products, setProducts] = useState([]);
  const [foobar, setFoobar] = useState({ taps: [] });
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    FetchBeerTypes();
  }, []);

  function FetchBeerTypes() {
    //Fetch beertypes from Heroku
    fetch("https://dreaming-of-foobar.herokuapp.com/beertypes")
      .then((resp) => resp.json())
      .then((json) => {
        const nextJSON = json.map((beer) => {
          //laver nyt object. Match mellem names
          const priceObject = prices.find((item) => item.name === beer.name);
          console.log(priceObject);
          //opretter en egenskab til beer der hedder pris
          beer.price = priceObject.price;
          return beer;
        });

        setProducts(nextJSON);
        fetchAvailable("https://dreaming-of-foobar.herokuapp.com");
      });
  }

  function fetchAvailable(url) {
    console.log("hej");

    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setFoobar(json);

        //tjekker hvert andet sekund
        setTimeout(() => {
          fetchAvailable(url);
        }, 2000);
      });
  }

  function addToBasket(product) {
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
      // remove one product of that type in the basket
      productInBasket.amount--;
      // update the state, if amount is less than 0 remove fram basket
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
          <Route
            path="/"
            exact
            render={() => (
              <main>
                <ProductList className="ProductList" taps={foobar.taps} products={products} addToBasket={addToBasket} removeFromBasket={removeFromBasket} basket={basket} />
                <Basket basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} />
              </main>
            )}
          />
          <Route path="/payment" render={() => <Payment basket={basket}></Payment>} />
          <Route path="/thanks" render={() => <ThankYou></ThankYou>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
