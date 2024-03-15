import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        signUpForPromotions: false,
    });
    const [showPaymentFields, setShowPaymentFields] = useState(false);
    const [showAddressFields, setShowAddressFields] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        const errors = {};
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (!passwordRegex.test(formData.password)) {
            errors.password = 'Password must be at least 8 characters long, contain a number, a special character, and a capital letter.';
        }

        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords must match.';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      
        if (!validateForm()) {
          return;
        }
      
        // Here, include your registration logic like sending a verification code to the user's email
        // If registration logic is successful, navigate to the verification code page
        navigate('/verify-account', { state: { email: formData.email } });
      };

    return (
        <div>
            <Header />
            <div className="signup-container">
                <h3>Sign Up</h3>
                <form className="signup-form" onSubmit={handleSubmit}>
                    {/* Add asterisks to indicate required fields */}
                    <div className="input-group">
                        <input type="text" id="firstname" name="firstname" placeholder="First name *" required onChange={handleInputChange} />
                        <input type="text" id="lastname" name="lastname" placeholder="Last name *" required onChange={handleInputChange} />
                    </div>
                    <div className="input-group">
                        <input type="email" id="email" name="email" placeholder="Email *" required onChange={handleInputChange} />
                        <input type="tel" id="phone" name="phone" placeholder="Phone Number *" required onChange={handleInputChange} />
                    </div>
                    <div className="input-group">
                         <input type="password" id="password" name="password" placeholder="Password" required onChange={handleInputChange} />
                        {formErrors.password && <p className="error-message">{formErrors.password}</p>}
                         <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required onChange={handleInputChange} />
                         {formErrors.confirmPassword && <p className="error-message">{formErrors.confirmPassword}</p>}
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" id="signUpForPromotions" name="signUpForPromotions" onChange={handleInputChange} />
                        <label htmlFor="signUpForPromotions">Sign up for promotions</label>
                    </div>
                    <div className="optional-actions">
                    <button type="button" className="optional-button" onClick={() => setShowPaymentFields(!showPaymentFields)}>
                        Add payment info
                    </button>
                    {showPaymentFields && (
                        <div className="input-group">
                            <input type="text" id="cardName" name="cardName" placeholder="Name As it Appears on Card" />
                            <input type="text" id="billingAddress" name="addressLine1" placeholder="Address Line 1" />
                            <input type="text" id="billingAddress2" name="addressLine2" placeholder="Address Line 2" />
                            <input type="text" id="city" name="city" placeholder="City" />
                            <input type="text" id="state" name="state" placeholder="State" />
                            <input type="text" id="zipCode" name="zipCode" placeholder="Zip Code" />
                            <input type="text" id="cardNumber" name="cardNumber" placeholder="Card Number" />
                            <input type="text" id="expiryDate" name="expiryDate" placeholder="Expiry Date" />
                            <input type="text" id="cvv" name="cvv" placeholder="CVV" />
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
                    <input type="submit" value="Create Account" className="submit-button" />
                </form>
                {/* Add a note at the bottom about mandatory fields */}
                <p className="mandatory-note">* Indicates a required field</p>
                <p className="link">Already have an account? <a href="/login">Log in here!</a></p>
            </div>
        </div>
    );
};

export default Signup;
