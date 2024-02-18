import React from 'react';
import Header from './../Header';
import './signup.css'

const Signup = () => {
    return (
      <div>
      <Header />
        <div className="signup-container">
            <h3>Sign up now!</h3>
            <form action="/login" method="post" className="signup-form">
              <div className="input-group">
                <input type="text" id="firstname" name="firstname" placeholder="First name" required />
                <input type="text" id="lastname" name="lastname" placeholder="Last name" required />
              </div>
              <div className="input-group">
                <input type="email" id="email" name="email" placeholder="Email" required/>
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" required/>
              </div>
              <div className="input-group">
                <input type="password" id="password" name="password" placeholder="Password" required/>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required/>
              </div>
              
              <div className="optional-actions">
                <button type="button" className="optional-button">Add payment info</button>
                <button type="button" className="optional-button">Add address</button>
              </div>

                <input type="submit" value="Create Account" className="submit-button"/>
            </form>
            <p>Already have an account? <a href="/login">Log in here!</a></p>
        </div>
        </div>
    );
};

export default Signup;