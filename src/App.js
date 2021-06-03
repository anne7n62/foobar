import "./sass/main.scss";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductList from "./ProductList.js";
import Basket from "./Basket.js";
import Payment from "./Payment.js";
import Header from "./Header.js";
import ThankYou from "./ThankYou.js";
import prices from "./prices.json";

function App() {
  const [products, setProducts] = useState([]);
  const [foobar, setFoobar] = useState({ taps: [] });
  const [basket, setBasket] = useState([]);
  const [category, setCategory] = useState("All beers");
  const [orderId, setOrderId] = useState("0");

  // Data fetch using useEffect

  useEffect(() => {
    function fetchBeerTypes() {
      // Fetch endpoint beertypes from Heroku
      fetch("https://dreaming-of-foobar.herokuapp.com/beertypes")
        .then((resp) => resp.json())
        .then((json) => {
          const nextJSON = json.map((beer) => {
            // Creates a new object and finding matches in prices
            const priceObject = prices.find((item) => item.name === beer.name);
            // Creating a new property 'price'
            beer.price = priceObject.price;
            return beer;
          });

          setProducts(nextJSON);
          fetchAvailable("https://dreaming-of-foobar.herokuapp.com");
        });
    }
    fetchBeerTypes();
  }, []);

  function fetchAvailable(url) {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setFoobar(json);
      });
  }

  // Array that has all the names of beers that are on tap
  const beersFromTap = foobar.taps.map((beer) => beer.beer);

  // Filter through products and beersFromTap and finding matches under category
  const filteredBeers = products.filter((beers) => beersFromTap.includes(beers.name));
  const btnCategories = products.filter((beers) => beersFromTap.includes(beers.name));

  let clickFilteredBeers = filteredBeers.filter((beer) => beer.category === category);

  if (category === "All beers") {
    clickFilteredBeers = filteredBeers;
  }

  // Add to basket function

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

  // Remove from basket function

  function removeFromBasket(product) {
    const productInBasket = basket.find((item) => item.product.name === product.name);
    if (productInBasket) {
      productInBasket.amount--;
      setBasket((prevState) => prevState.map((item) => item).filter((item) => item.amount > 0));
    }
  }

  return (
    <Router>
      <div className="App">
        <Header addToBasket={addToBasket} removeFromBasket={removeFromBasket} basket={basket} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <main>
                <div className="bg_text">
                  <h1>Foobar</h1>
                </div>
                <ProductList
                  className="ProductList"
                  btnCategories={btnCategories}
                  setCategory={setCategory}
                  filteredBeers={clickFilteredBeers}
                  taps={foobar.taps}
                  products={products}
                  addToBasket={addToBasket}
                  removeFromBasket={removeFromBasket}
                  basket={basket}
                />
                <Basket basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} />
              </main>
            )}
          />
          <Route path="/payment" render={() => <Payment basket={basket} setBasket={setBasket} setOrderId={setOrderId} orderId={orderId}></Payment>} />
          <Route path="/thanks">
            <ThankYou orderId={orderId} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
