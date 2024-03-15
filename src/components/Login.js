import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from './Header';
import './signup.css';

function Login({ setLoggedIn }) {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
      e.preventDefault();
      // Placeholder for your login verification logic

      // Simulate login success
      setLoggedIn(true); // Update login state
      if (rememberMe) {
          localStorage.setItem('userEmail', email);
      } else {
          localStorage.removeItem('userEmail');
      }
      navigate('/'); // Navigate to the homepage
  }

  // Your existing return statement...



    return (
      <div>  
        <Header />
        <div className="signup-container">
            <h3>Log in:</h3>
            <form className="signup-form" onSubmit={handleLogin}>
              <div className="input-group">
                <input type="email" id="email" name="email" placeholder="Email" required
                  value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" id="password" name="password" placeholder="Password" required
                  value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div>
                <input type="checkbox" id="rememberMe" name="rememberMe" checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}/>
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <div>
                <br></br>
              </div>
                <input type="submit" value="Submit" className="submit-button"/>
            </form>
            <p className="lin"><a href="/forgot-password">Forgot password?</a></p>
            <p className="lin"> Don't have an account? <a href="/signup">Sign up here!</a></p>
        </div>
      </div>
    );
}

export default Login;

