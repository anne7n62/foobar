import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProductList from "./ProductList.js";
import Basket from "./Basket.js";
import Payment from "./Payment.js";
import ThankYou from "./ThankYou.js";

import "./App.css";
import prices from "./prices.json";

function App() {
  const [products, setProducts] = useState([]);
  const [foobar, setFoobar] = useState({ taps: [] });
  const [basket, setBasket] = useState([]);
  const [category, setCategory] = useState('All');

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
          //opretter en egenskab til beer der hedder pris
          beer.price = priceObject.price;
          return beer;
        });

        setProducts(nextJSON);
        fetchAvailable("https://dreaming-of-foobar.herokuapp.com");
      });
  }

  function fetchAvailable(url) {

    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setFoobar(json);

        // //tjekker hvert femte sekund
        // setTimeout(() => {
        //   fetchAvailable(url);
        // }, 5000);
      });
  }


  //arr that has all the names of beers that on tap.
  const beersFromTap = foobar.taps.map(beer => beer.beer);
  const filteredBeers = products.filter(beers =>
    beersFromTap.includes(beers.name)
  );
  const btnCategories = products.filter(beers =>
    beersFromTap.includes(beers.name)
  );


  let clickFilteredBeers = filteredBeers.filter(
    beer => beer.category === category
  );

  if (category === 'All') {
    clickFilteredBeers = filteredBeers;
  }

  // console.log(products)
  // console.log(foobar.taps)
  // console.log(filteredBeers)

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
                <ProductList className="ProductList" btnCategories={btnCategories} setCategory={setCategory} filteredBeers={clickFilteredBeers} taps={foobar.taps} products={products} addToBasket={addToBasket} removeFromBasket={removeFromBasket} basket={basket} />
                <Basket basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} />
              </main>
            )}
          />
          <Route path="/payment" render={() => <Payment basket={basket}></Payment>} />
          <Route path="/thanks">
            <ThankYou />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
