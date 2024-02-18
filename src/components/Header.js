import React from 'react';
import logo from '../resources/logo.png';
import { Link } from 'react-router-dom';
import './header.css';

const Hdr = ({ isLoggedIn, setLoggedIn }) => {

  const handleLogout = () => {
    localStorage.setItem('auth-token', '');
    setLoggedIn(false);
  };

  return (
    <div className='header'>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" /> {/* Updated line */}
      </Link>
      <h1>Cinema E-Booking System</h1>
      <div className="buttons">
        {isLoggedIn ? (
          <>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/books">
              <button>Books</button>
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
