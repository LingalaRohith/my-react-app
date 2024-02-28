import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
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

 const adjustSeatsForTicketChange = (newTicketQuantities) => {
 const newTotalTickets = Object.values(newTicketQuantities).reduce((acc, curr) => acc + curr, 0);
 let updatedSelectedSeats = [...localSelectedSeats];

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
};

export default OrderSummary;
