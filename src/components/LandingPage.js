import React, { useState } from 'react';
import Header from './Header';
import './landingpage.css';

function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState(''); 

  return (
    <div className="App">  
      <Header />
      <div className="movies-and-search-container">
        <div className="search-container">
          <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
            {searchBy === '' && <option disabled hidden value="">Search By...</option>}
            <option value="title">Title</option>
            <option value="genre">Genre</option>
            <option value="date">Show Times</option>
          </select>
          <input
            type="text"
            placeholder={`Find a movie to watch!`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick>Search</button>
        </div>
        <h2>Currently Running: </h2>
        <h2>Coming Soon: </h2>
      </div>
    </div>
  );
}

export default LandingPage;
