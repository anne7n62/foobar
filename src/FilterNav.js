function FilterNav({ products, setCategory, taps, btnCategories }) {
  function updateCategory(e) {
    setCategory(e.target.innerText);
  }

  const categories = [];
  btnCategories.forEach((beer) => {
    if (categories.indexOf(beer.category) < 0) {
      categories.push(beer.category);
    }
  });

  const filterbtns = categories.map((category) => <Filterbtn className="filterbtn" products={products} updateCategory={updateCategory} key={category} category={category}></Filterbtn>);

  return (
    <div className="filternav">
      <button className="filters" onClick={updateCategory}>
        All beers
      </button>
      {filterbtns}
    </div>
  );
}

function Filterbtn({ category, products, updateCategory }) {
  return (
    <button key={category} className="filters" disabled={category === products.category} onClick={updateCategory}>
      {category}
    </button>
  );
}

export default FilterNav;
