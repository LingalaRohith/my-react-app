import React, { useState, useEffect } from 'react';
import logo from '../resources/logo.png';
import { Link } from 'react-router-dom';
import './header.css';

const Hdr = ({ isLoggedIn, setLoggedIn }) => {

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className='header'>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" /> 
      </Link>
      <h1>Cinema Hub</h1>
      <div className="buttons">
        {isLoggedIn ? (
          <>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/MoviesPage">
              <button>Movies</button>
            </Link>
            <Link to="/">
              <button onClick={handleLogout}>Logout</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
            <Link to="/">
              <button>Home</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Hdr;
