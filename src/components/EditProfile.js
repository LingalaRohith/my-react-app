import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import './editprofile.css';

function EditProfile({ isLoggedIn, setLoggedIn }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});


    const initialProfileData = location.state ? location.state.userData : {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        creditCards: [], 
        address: { 
            homeAddress: '',
            city: '',
            state: '',
            postalCode: '',
            country: ''
        },
        password: '',
        promotions: false,
    };

    const [profileData, setProfileData] = useState(initialProfileData);
    const [showCreditCardInputs, setShowCreditCardInputs] = useState(initialProfileData.creditCards && initialProfileData.creditCards.length > 0);
    const [showAddressInputs, setShowAddressInputs] = useState(!!initialProfileData.address.homeAddress);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProfileData({ ...profileData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleCreditCardChange = (index, e) => {
        const { name, value } = e.target;
        let updatedCreditCards = [...profileData.creditCards];
        updatedCreditCards[index] = { ...updatedCreditCards[index], [name]: value };
        setProfileData({ ...profileData, creditCards: updatedCreditCards });
    };
    

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, address: { ...profileData.address, [name]: value } });
    };

    const toggleCreditCardInputs = () => {
        setShowCreditCardInputs(!showCreditCardInputs);
    };

    const addCreditCard = (e) => {
        e.preventDefault(); 
        if (profileData.creditCards.length < 3) {
            setProfileData({
                ...profileData,
                creditCards: [...profileData.creditCards, { number: '', expirationDate: '', cvv: '' }]
            });
        }
    };


    const toggleAddressInputs = () => {
        setShowAddressInputs(!showAddressInputs);
    };

    const togglePromotions = () => {
        setProfileData({ ...profileData, promotions: !profileData.promotions });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/profilepage', { state: { userData: profileData } });
    };

    

    if (!profileData.creditCards) {
        setProfileData({ ...profileData, creditCards: [] });
    }
    return (
        <div>  
            <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
            <div className="edit-profile-container">
                <h2>Edit Profile</h2>
                <form className="edit-profile-form" onSubmit={handleSubmit}>
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
                <button onClick={addCreditCard} disabled={profileData.creditCards.length >= 3}>
    Add Credit Card
</button>

                    <button type="button" onClick={toggleAddressInputs}>
                        {showAddressInputs ? 'Hide Home Address' : 'Add Home Address'}
                    </button>
                    {showAddressInputs && (
                        <div>
                            <label>
                                Address:
                                <input type="text" name="homeAddress" value={profileData.address.homeAddress} onChange={handleAddressChange}/>
                            </label>
                            <label>
                                City:
                                <input type="text" name="city" value={profileData.address.city} onChange={handleAddressChange}/>
                            </label>
                            <label>
                                State/Province:
                                <input type="text" name="state" value={profileData.address.state} onChange={handleAddressChange}/>
                            </label>
                            <label>
                                Postal Code:
                                <input type="text" name="postalCode" value={profileData.address.postalCode} onChange={handleAddressChange}/>
                            </label>
                            <label>
                                Country:
                                <input type="text" name="country" value={profileData.address.country} onChange={handleAddressChange}/>
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

