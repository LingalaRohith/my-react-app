import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header">
     <h1>Cinema E-Booking</h1>
     <div className="buttons-container">
        <Link to="/moviespage">
          <button>Browse Movies</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button className="signup">Signup</button>
        </Link>
     </div>
    </div>
  );
};

export default Header;