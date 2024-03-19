import React, { useState, useEffect } from 'react';
import logo from '../resources/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import './Signup.js';

const Hdr = ({ isLoggedIn, setLoggedIn, isAdmin, setAdmin }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [userInitial, setUserInitial] = useState('');
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    // Assuming user data is stored in localStorage as 'userData'
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setUserInitial(userData.firstName.charAt(0).toUpperCase());
      setFirstName(userData.firstName);
    }
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    setAdmin(false);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userData');
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
