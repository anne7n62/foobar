import {useState} from "react";

function MyBasket({basket}) {
  return(
    <>
    <ul>
      {basket.map((item)=> <BasketItem {...item}></BasketItem>  )}
    </ul>
    <p>You have {basket.length} item{basket.length!==1?"s":""} in the basket.</p>
    </>
  )
}

function BasketItem(props) {
  console.log(props);
  return(
    <li>{props.count} {props.product.productdisplayname}</li>
  );
}

export default MyBasket;