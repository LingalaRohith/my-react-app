import React, { useState } from 'react';
import Header from './Header';
import './signup.css';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const [popupMessage, setPopupMessage] = useState('');

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try{
        const response = await axios.post('http://localhost:8080/getCustomer',formData);
        console.log(response.data);
        if (response.data['203']) {
          // Incorrect password
          setPopupMessage('Incorrect password. Please try again!');
      } else if (response.data['204']) {
          // User not found
          setPopupMessage('User not found. Please sign up!');
      } else if (response.data['200']) {
          // Success
          setPopupMessage('Login successful!');
      } else {
          // Other errors
          setPopupMessage('An error occurred. Please try again later!');
      }
      }catch(error){
        console.error('Error:', error);
      }
    }

    return (
      <div>  
        <Header />
        <div className="signup-container">
            <h3>Log in:</h3>
            <form onSubmit={handleSubmit} className="signup-form">
            {/* <form  action="/login" method="post" className="signup-form"> */}
              <div className="input-group">
                <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
                <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required/>
              </div>
              <div>
                <br></br>
              </div>
                <input type="submit" value="Submit" className="submit-button"  />
            </form>
            {popupMessage && (
                    <div className="popup">
                        <span className="popup-message">{popupMessage}</span>
                    </div>
                )}
            <p class="lin"> Don't have an account? <a href="/signup">Sign up here!</a></p>
        </div>
      </div>
      
    );
  }
  
  export default Login;