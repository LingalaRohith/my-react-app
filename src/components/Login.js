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
            <p class="lin"> Don't have an account? <a href="/signup">Sign up here!</a></p>
        </div>
      </div>
      
    );
  }
  
  export default Login;