import { useState } from 'react';

function CheckoutForm() {
  const [payerName, setPayerName] = useState("");
  const [creditCardNo, setCreditCardNo] = useState("");
  const [creditCardMonth, setCreditCardMonth] = useState("");
  const [creditCardYear, setCreditCardYear] = useState("");

  const payerNameChanged = (e) => {
    setPayerName(e.target.value);
  }

  const creditCardNoChanged = (e) => {
    setCreditCardNo(e.target.value);
  }

  const creditCardMonthChanged = (e) => {
    setCreditCardMonth(e.target.value);
  }

  const creditCardYearChanged = (e) => {
    setCreditCardYear(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting payment");
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Name
        <input type="text" onChange={payerNameChanged} name="payerName" value={payerName}></input>  
      </label>

      <label>Credit Card
        <input type="text" minLength="16" onChange={creditCardNoChanged} name="creditCardNo" value={creditCardNo}></input>  
      </label>

      <label>Month
        <input type="number" min="1" max="12" onChange={creditCardMonthChanged} name="creditCardMonth" value={creditCardMonth}></input>  
        
      </label>

      <label>Year
        <input type="number" onChange={creditCardYearChanged} name="creditCardYear" value={creditCardYear}></input>  
      </label>

      <input type="submit" value="Make Payment"></input>


      

    </form>
  )
}

export default CheckoutForm;