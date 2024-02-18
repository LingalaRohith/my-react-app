import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className="header">
      <h1>Cinema E-Booking</h1>
      <div className="buttons-container">
        <Link to="/moviespage">
          <button>Browse Movies</button>
        </Link>
        
        {currentPage === '/signup' && (
          <Link to="/">
            <button>Home</button>
          </Link>
        )}
        
        {currentPage !== '/login' && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        
        {currentPage !== '/signup' && (
          <Link to="/signup">
            <button className="signup">Signup</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;


