import React, { useState } from 'react';
import Header from './Header';
import Seat from './Seat'; // Import the Seat component
import './BookSeats.css';

function BookSeats() {
  const [searchBy, setSearchBy] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatIndex) => {
    // Toggle the seat selection
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatIndex)) {
        return prevSelectedSeats.filter((index) => index !== seatIndex);
      } else {
        return [...prevSelectedSeats, seatIndex];
      }
    });
  };

  const renderSeats = () => {
    const totalSeats = 20; // Adjust this based on your total number of seats
    const seats = [];

    for (let i = 0; i < totalSeats; i++) {
      seats.push(
        <Seat
          key={i}
          selected={selectedSeats.includes(i)}
          onClick={() => handleSeatClick(i)}
        />
      );
    }

    return seats;
  };

  return (
    <div className="App">
      <Header />
      <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
        {searchBy === '' && <option disabled hidden value="">Age</option>}
        <option value="title">Under 13</option>
        <option value="genre">Over 13</option>
      </select>
      <div className="seat-container">{renderSeats()}</div>
      <button onClick>Confirm Order</button>
    </div>
  );
}

export default BookSeats;