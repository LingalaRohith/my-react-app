import React, { useState } from 'react';
import Header from './Header';
import './landingpage.css';

const currentlyRunningMovies = [
  { title: 'Movie A', genre: 'Action', date: '2024-01-01' },
  { title: 'Movie B', genre: 'Drama', date: '2024-01-02' },
  // Add more movie objects here...
];

const comingSoonMovies = [
  { title: 'Movie C', genre: 'Thriller', date: '2024-02-01' },
  { title: 'Movie D', genre: 'Comedy', date: '2024-02-15' },
];

function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState('');
  const [filteredCurrentlyRunningMovies, setFilteredCurrentlyRunningMovies] = useState(currentlyRunningMovies); // Initialize with all currently running movies
  const [filteredComingSoonMovies, setFilteredComingSoonMovies] = useState(comingSoonMovies); // Initialize with all coming soon movies

  const handleSearch = () => {
    if (!searchBy || !searchQuery) {
      alert('Please select a search category and enter a query.');
      return;
    }

    // Filter currently running movies
    const filteredCurrently = currentlyRunningMovies.filter((movie) => {
      const value = movie[searchBy].toString().toLowerCase();
      return value.includes(searchQuery.toLowerCase());
    });

    // Filter coming soon movies
    const filteredSoon = comingSoonMovies.filter((movie) => {
      const value = movie[searchBy].toString().toLowerCase();
      return value.includes(searchQuery.toLowerCase());
    });

    setFilteredCurrentlyRunningMovies(filteredCurrently);
    setFilteredComingSoonMovies(filteredSoon);
  };

  return (
    <div className="App">  
      <Header />
      <div className="movies-and-search-container">
        <div className="search-container">
          <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
            {searchBy === '' && <option disabled hidden value="">Search By...</option>}
            <option value="title">Title</option>
            <option value="genre">Genre</option>
            <option value="date">Date</option>
          </select>
          <input
            type="text"
            placeholder="Find a movie to watch!"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>Search</button>
        </div>
        <div className="sections">
          <h2>CURRENTLY RUNNING</h2>
          <div className='list'>
          {filteredCurrentlyRunningMovies.map((movie, index) => (
            <div key={index} className="mov">
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <p>Show Time: {movie.date}</p>
            </div>
          ))}
          </div>
          <h2>COMING SOON</h2>
          <div className='list'>
          {filteredComingSoonMovies.map((movie, index) => (
            <div key={index} className="mov">
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <p>Release Date: {movie.date}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
