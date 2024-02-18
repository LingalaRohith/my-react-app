import React from 'react'; 
import Header from './Header';
import './verification.css';

function Verification() {
    return (
        <div>  
            <Header /> 
            <div className="verify">
            <h1>Thank you!</h1>
            <p>Please enter the verification code sent to your email.</p>
            <input type="text" placeholder="Verification Code" required/>
            <button type="submit">Submit</button>
            </div>          
        </div>
    );
}

export default Verification;
