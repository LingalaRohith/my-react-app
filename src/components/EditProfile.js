import React, { useState } from 'react';
import Header from './Header';
import './editprofile.css';

function EditProfile({isLoggedIn}) {
    const [showCreditCardInputs, setShowCreditCardInputs] = useState(false);
    const [showAddressInputs, setShowAddressInputs] = useState(false);

    const toggleCreditCardInputs = () => {
        setShowCreditCardInputs(!showCreditCardInputs);
    };

    const toggleAddressInputs = () => {
        setShowAddressInputs(!showAddressInputs);
    };

    return (
        <div>  
            <Header isLoggedIn={isLoggedIn}/>
            <div className="edit-profile-container">
                <h2>Edit Profile</h2>
                <form className="edit-profile-form">
                    <label>
                        First name:
                        <input type="text" name="firstName" />
                    </label>
                    <label>
                        Last name:
                        <input type="text" name="lastName" />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" name="phone" />
                    </label>
                    <label>
                        New Password:
                        <input type="password" name="password" />
                    </label>
                    <label>
                        Confirm New Password:
                        <input type="password" name="confirmPassword" />
                    </label>
                    <button type="button" onClick={toggleCreditCardInputs}>
                        {showCreditCardInputs ? 'Hide Credit Card Info' : 'Add Credit Card Info'}
                    </button>
                    {showCreditCardInputs && (
                        <div>
                            <label>
                                Credit Card Number:
                                <input type="text" name="creditCard" />
                            </label>
                            <label>
                                Expiration Date:
                                <input type="text" name="expirationDate" placeholder="MM/YY" />
                            </label>
                            <label>
                                CVV:
                                <input type="text" name="cvv" />
                            </label>
                        </div>
                    )}

                    <button type="button" onClick={toggleAddressInputs}>
                        {showAddressInputs ? 'Hide Home Address' : 'Add Home Address'}
                    </button>
                    {showAddressInputs && (
                        <div>
                            <label>
                                Address:
                                <input type="text" name="homeAddress" />
                            </label>
                            <label>
                                City:
                                <input type="text" name="city" />
                            </label>
                            <label>
                                State/Province:
                                <input type="text" name="state" />
                            </label>
                            <label>
                                Postal Code:
                                <input type="text" name="postalCode" />
                            </label>
                            <label>
                                Country:
                                <input type="text" name="country" />
                            </label>
                        </div>
                    )}

                    <button type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    );
}
export default EditProfile;
