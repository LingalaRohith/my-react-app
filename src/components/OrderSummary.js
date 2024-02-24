import React, { useState } from 'react';
import Header from './Header';
import './OrderSummary.css'; 
function OrderSummary() {
  // State hooks for managing form inputs
  const [email, setEmail] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCVC] = useState('');
  const [expDate, setExpDate] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //  handle the submission of the order
    // where you would typically send the data to your server or process it as needed
  };
  const savedCard = {
      cardNumber: '●●●● ●●●● ●●●● 5058',
      cardHolder: 'furwah t'
  
  };

  return (
    <>
      <Header />
      <div className="order-summary-container">
        <div className="review-order-section">
          <h1>Review Order</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <h2>Payment</h2>
            <div className="saved-card-display">
            <div className="card-chip"></div>
            <div className="card-logo">{savedCard.cardType}</div>
            <div className="card-number">{savedCard.cardNumber}</div>
             <div className="card-holder-name">
    <span className="card-holder-label"></span> {savedCard.cardHolder}
  </div>
</div>
            <label htmlFor="cardName">Name on Card</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              placeholder="Name on card"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />

            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />

            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCVC(e.target.value)}
              required
            />

            <label htmlFor="expDate">Expiration Date</label>
            <input
              type="text"
              id="expDate"
              name="expDate"
              placeholder="MM/YY"
              value={expDate}
              onChange={(e) => setExpDate(e.target.value)}
              required
            />

            <h2>Billing Information</h2>
            <label htmlFor="billingAddress">Billing Address</label>
            <input
              type="text"
              id="billingAddress"
              name="billingAddress"
              placeholder="Billing address"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              required
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />

            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              placeholder="Zip code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />

            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />

            <button type="submit" className="submit-order-btn">Submit Order</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default OrderSummary;
