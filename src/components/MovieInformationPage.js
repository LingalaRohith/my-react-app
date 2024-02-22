import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import './MovieInformationPage.css';
import { useNavigate } from 'react-router-dom';

function MovieInformationPage() {
    const navigate = useNavigate();

  
  const handleNavigation = () => {
    navigate('/bookseats');
  };
  const location = useLocation();
  const { movie } = location.state || {}; // Fallback to empty object if state is undefined

  return (
    <div className="App">
      <Header />
      <h2>{movie?.title}</h2>
      <p>{movie?.genre}</p>
      <p>{movie?.synopsis}</p>
      <div className="modal-content">
      <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${new URLSearchParams(new URL(movie?.trailer).search).get('v')}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <div class="bttns">
            <button onClick={handleNavigation}>Book Seats</button>
        </div>
        </div>
      {/* Add other components or data fetching logic as needed */}
    </div>
  );
}

export default MovieInformationPage;

