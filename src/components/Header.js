import React, { useState, useEffect, useReducer } from 'react';
import logo from '../resources/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import './Signup.js';

const Hdr = ({ isLoggedIn, setLoggedIn, isAdmin, setAdmin }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [userInitial, setUserInitial] = useState('');
  const [firstName, setFirstName] = useState('');
  const [, forceUpdate] = useReducer(x => x + 1, 0);


  useEffect(() => {
    const handleUserChange = () => {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData) {
        setUserInitial(userData.firstName.charAt(0).toUpperCase());
        setFirstName(userData.firstName);
        forceUpdate();
      } else {
        setUserInitial('');
        setFirstName('');
      }
    };
    handleUserChange();
    window.addEventListener('user-data-changed', handleUserChange);
    return () => window.removeEventListener('user-data-changed', handleUserChange);
}, []);

  const handleLogout = () => {
    setLoggedIn(false);
    setAdmin(false);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userData');
    window.dispatchEvent(new CustomEvent('user-data-changed'));
    navigate('/login');
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className='header'>
    <Link to="/">
      <img src={logo} className="logo" alt="logo" />
    </Link>
    <h1>Cinema Hub</h1>
    <div className="buttons">
        {isLoggedIn ? (
          <>
            <Link to={isAdmin ? "/admin" : "/"}>
                <button>Home</button>
            </Link>
            <Link to="/">
              <button>Book Movies</button>
            </Link>
            
            {/* User Initial and Dropdown */}
            <div className='user-info' onClick={toggleDropdown}>
            <div className='user-initial'>{userInitial}</div>
              <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
              <div className='dropdown-item-greeting'>Hi {firstName}!</div>
                <Link to="/editprofile">
                  <div className='dropdown-item'>Edit Profile</div>
                </Link>
                <div className='dropdown-item' onClick={handleLogout}>Sign out</div>
              </div>
            </div>
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
