import React, { useState } from 'react';
import Header from './Header';
import './editprofile.css';

const initialProfileData = {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    phone: '123-456-7890',
    creditCards: [{
        number: '**** **** **** 1234',
        expirationDate: '12/24',
        cvv: '123'
    }],
    address: {
        homeAddress: '123 Main St',
        city: 'Anytown',
        state: 'Anystate',
        postalCode: '12345',
        country: 'Canada'
    },
    password: '', // Placeholder for password change, not storing actual password here for security reasons
    promotions: false, // Initially not registered for promotions
};

function EditProfile({ isLoggedIn }) {
    const [profileData, setProfileData] = useState(initialProfileData);
    const [showCreditCardInputs, setShowCreditCardInputs] = useState(false);
    const [showAddressInputs, setShowAddressInputs] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCreditCardChange = (index, e) => {
        const { name, value } = e.target;
        const updatedCreditCards = [...profileData.creditCards];
        updatedCreditCards[index] = { ...updatedCreditCards[index], [name]: value };
        setProfileData(prevState => ({
            ...prevState,
            creditCards: updatedCreditCards
        }));
    };

    const toggleCreditCardInputs = () => {
        setShowCreditCardInputs(!showCreditCardInputs);
    };

    const toggleAddressInputs = () => {
        setShowAddressInputs(!showAddressInputs);
    };

    const togglePromotions = () => {
        setProfileData(prevState => ({
            ...prevState,
            promotions: !prevState.promotions
        }));
    };

    return (
        <div>  
            <Header isLoggedIn={isLoggedIn}/>
            <div className="edit-profile-container">
                <h2>Edit Profile</h2>
                <form className="edit-profile-form">
                    <label>
                        First name:
                        <input type="text" name="firstName" value={profileData.firstName} onChange={handleChange} />
                    </label>
                    <label>
                        Last name:
                        <input type="text" name="lastName" value={profileData.lastName} onChange={handleChange} />
                    </label>
                    <label>
                        Email (cannot be changed):
                        <input type="email" name="email" value={profileData.email} disabled />
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" name="phone" value={profileData.phone} onChange={handleChange} />
                    </label>
                    <label>
                        New Password:
                        <input type="password" name="password" value={profileData.password} onChange={handleChange} />
                    </label>
                    <label>
                        Register for Promotions:
                        <input type="checkbox" name="promotions" checked={profileData.promotions} onChange={togglePromotions} />
                    </label>
                    <button type="button" onClick={toggleCreditCardInputs}>
                        {showCreditCardInputs ? 'Hide Credit Card Info' : 'Add Credit Card Info'}
                    </button>
                    {showCreditCardInputs && profileData.creditCards.map((card, index) => (
                        <div key={index}>
                            <label>
                                Credit Card Number:
                                <input type="text" name="number" value={card.number} onChange={(e) => handleCreditCardChange(index, e)} />
                            </label>
                            <label>
                                Expiration Date:
                                <input type="text" name="expirationDate" value={card.expirationDate} onChange={(e) => handleCreditCardChange(index, e)} />
                            </label>
                            <label>
                                CVV:
                                <input type="text" name="cvv" value={card.cvv} onChange={(e) => handleCreditCardChange(index, e)} />
                            </label>
                        </div>
                    ))}

                    <button type="button" onClick={toggleAddressInputs}>
                        {showAddressInputs ? 'Hide Home Address' : 'Add Home Address'}
                    </button>
                    {showAddressInputs && (
                        <div>
                        <label>
                            Address:
                            <input type="text" name="homeAddress" value={profileData.address.homeAddress} onChange={handleChange}/>
                        </label>
                        <label>
                            City:
                            <input type="text" name="city" value={profileData.address.city} onChange={handleChange}/>
                        </label>
                        <label>
                            State/Province:
                            <input type="text" name="state" value={profileData.address.state} onChange={handleChange}/>
                        </label>
                        <label>
                            Postal Code:
                            <input type="text" name="postalCode" value={profileData.address.postalCode} onChange={handleChange}/>
                        </label>
                        <label>
                            Country:
                            <input type="text" name="country" value={profileData.address.country} onChange={handleChange}/>
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
