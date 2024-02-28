import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
<<<<<<< HEAD
import './OrderSummary.css'


const OrderSummary = ({ isLoggedIn }) => {
    const location = useLocation();
    const navigate = useNavigate();

 // Initialize with fallbacks to ensure we have an object and array to work with
    const { movie, selectedSeats, ticketQuantities, showShowDates, showShowTimes } = location.state || {
        movie: {}, selectedSeats: [], ticketQuantities: {}, showShowDates: '', showShowTimes: ''
    };

    const [localTicketQuantities, setLocalTicketQuantities] = useState(ticketQuantities);
    const [localSelectedSeats, setLocalSelectedSeats] = useState(selectedSeats);
    const [error, setError] = useState('');

 
    const ticketPrices = { adults: 16, children: 12, seniors: 10 };
    const bookingFee = 2;
    const taxRate = 0.07; // 7%

    const updateTicketQuantity = (type, increment) => {
        setLocalTicketQuantities(prev => {
        const updatedQuantities = {
        ...prev,
    [type]: Math.max(0, prev[type] + (increment ? 1 : -1)),
    };

        adjustSeatsForTicketChange(updatedQuantities);
        return updatedQuantities;
    });
    };

 const deleteTicketType = (type) => {
    setLocalTicketQuantities(prev => {
    const { [type]: _, ...rest } = prev;
 adjustSeatsForTicketChange(rest);
 return rest;
 });
 };
=======
import './OrderSummary.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const OrderSummary = ({ isLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { movie, selectedSeats, ticketQuantities, showShowDates, showShowTimes } = location.state || {
    movie: {}, selectedSeats: [], ticketQuantities: {}, showShowDates: '', showShowTimes: ''
  };
  const [localTicketQuantities, setLocalTicketQuantities] = useState(ticketQuantities);
  const [localSelectedSeats, setLocalSelectedSeats] = useState(selectedSeats);
  const [error, setError] = useState('');

  const ticketPrices = { adults: 16, children: 12, seniors: 10 };
  const bookingFee = 2;
  const taxRate = 0.07; // 7%

  const updateTicketQuantity = (type, increment) => {
    setLocalTicketQuantities(prev => {
      const updatedQuantities = {
        ...prev,
        [type]: Math.max(0, prev[type] + (increment ? 1 : -1)),
      };

      adjustSeatsForTicketChange(updatedQuantities);
      return updatedQuantities;
    });
  };

  const deleteTicketType = (type) => {
    setLocalTicketQuantities(prev => {
      const { [type]: _, ...rest } = prev;
      adjustSeatsForTicketChange(rest);
      return rest;
    });
  };

  const adjustSeatsForTicketChange = (newTicketQuantities) => {
    const newTotalTickets = Object.values(newTicketQuantities).reduce((acc, curr) => acc + curr, 0);
    let updatedSelectedSeats = [...localSelectedSeats];
>>>>>>> ac86128 (fixed css for bookseats, ordersummary,)

    if (newTotalTickets > updatedSelectedSeats.length) {
      navigate('/bookseats', {
        state: {
          movie,
          existingSelections: updatedSelectedSeats,
          ticketQuantities: newTicketQuantities,
          showShowDates,
          showShowTimes,
          additionalSeatsNeeded: newTotalTickets - updatedSelectedSeats.length
        }
      });
    } else if (newTotalTickets < updatedSelectedSeats.length) {
      updatedSelectedSeats = updatedSelectedSeats.slice(0, newTotalTickets);
      setLocalSelectedSeats(updatedSelectedSeats);
    }
  };

  const calculatePrice = (ticketType) => localTicketQuantities[ticketType] ? localTicketQuantities[ticketType] * ticketPrices[ticketType] : 0;
  const subtotal = Object.keys(localTicketQuantities).reduce((acc, curr) => acc + calculatePrice(curr), 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax + bookingFee;

  const handleBack = () => {
    navigate(-1);
  };

<<<<<<< HEAD
 const handleBack = () => {
 navigate(-1);
 };

 const navigateToCheckout = () => {
 const totalTickets = Object.values(localTicketQuantities).reduce((sum, quantity) => sum + quantity, 0);
 if (totalTickets === 0) {
 setError('You need to buy at least one ticket to proceed.');
 } else {
 navigate('/checkout', { 
 state: { 
 localSelectedSeats, 
 localTicketQuantities, 
 movie, 
 subtotal, 
 tax, 
 total, 
 showShowDates, 
 showShowTimes 
 }
 });
 }
 };
 return (
    <>
        <Header isLoggedIn={isLoggedIn} />
        <div className="ret">
            <h2>Order Summary</h2>
            <div className="items">
                <div className="style">
                    <div><strong>Movie:</strong> {movie.title}</div>
                    <br />
                    <div><strong>Show Date:</strong> {showShowDates}</div>
                    <br />
                    <div><strong>Show Time:</strong> {showShowTimes}</div>
                    <br />
                    <div><strong>Selected Seats:</strong> {localSelectedSeats.join(', ')}</div>
                    <br />
                    <div><strong>Tickets:</strong></div>
                </div>
            
                <ul>
                {Object.entries(localTicketQuantities).map(([type, quantity]) => (
                <li key={type}>
                {`${type}: ${quantity} x $${ticketPrices[type]} = $${calculatePrice(type)}`}
                <button onClick={() => updateTicketQuantity(type, true)}>+</button>
                <button onClick={() => updateTicketQuantity(type, false)}>-</button>
                <button onClick={() => deleteTicketType(type)}>Delete</button>
                </li>
                ))}
                </ul>
                <div className="style">
                    <div>
                        <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
                    </div>
                    <br />
                    <div>
                        <strong>Tax (7%):</strong> ${tax.toFixed(2)}
                    </div>
                    <br />
                    <div>
                        <strong>Booking Fee:</strong> ${bookingFee.toFixed(2)}
                    </div>
                    <br />
                    <div>
                        <strong>Total:</strong> ${total.toFixed(2)}
                    </div>
                    <br />
                    <div>
                        <button onClick={handleBack}>Back</button>
                        <button onClick={navigateToCheckout}>Confirm and Continue</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </>
 );
=======
  const navigateToCheckout = () => {
    const totalTickets = Object.values(localTicketQuantities).reduce((sum, quantity) => sum + quantity, 0);
    if (totalTickets === 0) {
      setError('You need to buy at least one ticket to proceed.');
    } else {
      navigate('/checkout', { 
        state: { 
          localSelectedSeats, 
          localTicketQuantities, 
          movie, 
          subtotal, 
          tax, 
          total, 
          showShowDates, 
          showShowTimes 
        }
      });
    }
  };
  return (
    <>
    <div className="order-special-page"> 
      <Header isLoggedIn={isLoggedIn} />
      <div className="order-summary-containers">
      <div class="main-container">
        <h2 className="order-summary-title">Order Summary</h2>
        <div className="order-summary-details">
          <div className="detail-line">Movie: {movie.title}</div>
          <div className="detail-line">Show Date: {showShowDates}</div>
          <div className="detail-line">Show Time: {showShowTimes}</div>
          <div className="detail-line">Selected Seats: {localSelectedSeats.join(', ')}</div>
          <div className="tickets-container">
            {Object.entries(localTicketQuantities).map(([type, quantity]) => (
              <div className="ticket-detail" key={type}>
                <span>{`${type.charAt(0).toUpperCase() + type.slice(1)}: ${quantity} x $${ticketPrices[type]}`}</span>
                <span>= ${calculatePrice(type).toFixed(2)}</span>
                <div className="quantity-buttons">
                  <button onClick={() => updateTicketQuantity(type, true)}>+</button>
                  <button onClick={() => updateTicketQuantity(type, false)}>-</button>
                  <button onClick={() => deleteTicketType(type)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          <div className="detail-line">Subtotal: ${subtotal.toFixed(2)}</div>
          <div className="detail-line">Tax (7%): ${tax.toFixed(2)}</div>
          <div className="detail-line">Booking Fee: ${bookingFee.toFixed(2)}</div>
          <div className="detail-line total">Total: ${total.toFixed(2)}</div>
          </div> 
          <div className="button-container">
          <button className="order-summary-button back-button" onClick={handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} /> {/* FontAwesome arrow icon */}
            </button>
            <button className="order-summary-button confirm-continue-button" onClick={navigateToCheckout}>Confirm and Continue</button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>
        </div>
      </div>
    </>
  );
>>>>>>> ac86128 (fixed css for bookseats, ordersummary,)
};

export default OrderSummary;

