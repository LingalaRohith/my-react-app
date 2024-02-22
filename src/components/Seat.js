import React from 'react';
import './Seat.css';

const Seat = ({ selected, onClick }) => {
  return (
    <div
      className={`seat ${selected ? 'selected' : ''}`}
      onClick={onClick}
    ></div>
  );
};

export default Seat;