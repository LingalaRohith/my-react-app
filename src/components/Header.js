import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header">
     <h1>Cinema E-Booking</h1>
     <div className="buttons-container">
      <button>Browse Movies</button>
      <button>Login</button>
      <button className="signup">Signup</button>
     </div>
    </div>
  );
};

export default Header;