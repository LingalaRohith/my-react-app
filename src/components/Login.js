import React from 'react';
import Header from './Header';
import './signup.css';

function Login() {
    return (
      <div>  
        <Header />
        <div className="signup-container">
            <h3>Log in:</h3>
            <form action="/login" method="post" className="signup-form">
              <div className="input-group">
                <input type="email" id="email" name="email" placeholder="Email" required/>
                <input type="password" id="password" name="password" placeholder="Password" required/>
              </div>
              <div>
                <br></br>
              </div>
                <input type="submit" value="Submit" className="submit-button"/>
            </form>
<<<<<<< HEAD
            <p class="lin"><a href="/forgot-password">Forgot password?</a></p>
            {popupMessage && (
                    <div className="popup">
                        <span className="popup-message">{popupMessage}</span>
                    </div>
                )}
=======
>>>>>>> parent of 91bf12e (Integration_login_and_signup)
            <p class="lin"> Don't have an account? <a href="/signup">Sign up here!</a></p>
        </div>
      </div>
      
    );
  }
  
  export default Login;