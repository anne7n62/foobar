function ThankYou(props) {
    console.log("Thank you");

    return (
        <div className="ThankYou">
            <h1>Thank you!</h1>
            <h1>Your order id: {props.orderId}</h1>

        </div>
    );
}

export default ThankYou;