function ThankYou(props) {

  return (
    <>
      <div className="bg_text">
        <h1>Foobar</h1>
      </div>
      <div className="thankyou_container">
        <div className="thankyou_content">
          <h1>Thank you!</h1>
          <h3>Order id: {props.orderId}</h3>
          <p>We have now received your order and we will serve you as soon as possible</p>
        </div>
      </div>
    </>
  );
}

export default ThankYou;
