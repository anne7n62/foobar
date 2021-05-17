import CheckoutForm from './CheckoutForm.js';
import MyBasket from './MyBasket.js';

function Basket(props) {
  return (
    <div className="Basket">
      <MyBasket {...props}></MyBasket>
      {props.basket.length > 0 && <CheckoutForm></CheckoutForm>}
    </div>
  )
}

export default Basket;