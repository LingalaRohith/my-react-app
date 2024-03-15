// VerifyAccount.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import './VerifyAccount.css'; 

const VerifyAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [code, setCode] = useState('');
  const email = location.state?.email; 

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would verify the code
    navigate('/registration-confirmation');
  };

  return (
    <div>
      <Header />
      <div className="verification-container"> 
        <h2>Verify Your Account</h2> 
        <p>Please enter the verification code sent to {email}</p>
        <form className="verification-form" onSubmit={handleSubmit}> 
          <input 
            type="text" 
            placeholder="Verification Code" 
            value={code} 
            onChange={(e) => setCode(e.target.value)}
            required 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyAccount;
