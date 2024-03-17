import React from 'react';
import logo from '../resources/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import './Signup.js';

const Hdr = ({ isLoggedIn, setLoggedIn }) => {

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userData'); // Clear saved user data
    <Link to="/login"> 
    </Link> 
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
            <Link to="/">
              <button> Book Movies</button>
            </Link>
            <Link to="/editprofile">
              <button>Edit Profile</button>
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
