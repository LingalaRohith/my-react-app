import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [showPaymentFields, setShowPaymentFields] = useState(false);
    const [showAddressFields, setShowAddressFields] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you would include your registration logic
        // For example, validating the form data, sending it to your server, etc.
        // If registration is successful, navigate to the confirmation page

        navigate('/registration-confirmation');
    };

    return (
        <div>
            <Header />
            <div className="signup-container">
                <h3>Sign Up</h3>
                <form className="signup-form" onSubmit={handleSubmit}>
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
                        <button type="button" className="optional-button" onClick={() => setShowPaymentFields(!showPaymentFields)}>
                            Add payment info
                        </button>
                        {showPaymentFields && (
                            <div className="input-group">
                                <input type="text" id="firstName" name="firstName" placeholder="Name As it Appears on Card" />
                                <input type="text" id="billingAddress" name="addressLine1" placeholder="Address Line 1" />
                                <input type="text" id= "billingAddress2" name="addressLine2" placeholder="Address Line 2" />
                                <input type="text" id="city" name="city" placeholder="City" />
                                <input type="text" id="state" name="state" placeholder="State" />
                                <input type="text" id="zipCode" name="zipCode" placeholder="Zip Code" />
                                <input type="text" id="cardNumber" name="cardNumber" placeholder="Card Number" />
                                <input type="text" id="expiryDate" name="expiryDate" placeholder="Expiry Date" />
                                <input type="text" id="expiryDate" name="expiryDate" placeholder="CVV" />

                            </div>
                        )}
                        <button type="button" className="optional-button" onClick={() => setShowAddressFields(!showAddressFields)}>
                            Add address
                        </button>
                        {showAddressFields && (
                            <div className="input-group">
                                {/* Replace these with your actual address fields */}
                                <input type="text" id="addressLine1" name="addressLine1" placeholder="Address Line 1" />
                                <input type="text" id="addressLine2" name="addressLine2" placeholder="Address Line 2" />
                                <input type="text" id="city" name="city" placeholder="City" />
                                <input type="text" id="state" name="state" placeholder="State" />
                                <input type="text" id="zipCode" name="zipCode" placeholder="Zip Code" />
                                {/* Add any additional address fields here */}
                            </div>
                        )}
                    </div>
                    <input type="submit" value="Create Account" className="submit-button"/>
                </form>
                <p class="lin">Already have an account? <a href="/login">Log in here!</a></p>
            </div>
        </div>
    );
};

export default Signup;
