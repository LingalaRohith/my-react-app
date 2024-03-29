import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import './profilepage.css';

function ProfilePage({ isLoggedIn, setLoggedIn }) {
    const location = useLocation();
    const localUserData = JSON.parse(localStorage.getItem('userData'));
    const [userData, setUserData] = useState(localUserData || {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        phone: '123-456-7890',
        creditCards: [{ 
            number: '5342 0735 7575 1234',
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
        promotions: '',
    });

    useEffect(() => {
      if (location.state && location.state.userData) {
          setUserData(location.state.userData);
          // Save userData to localStorage
          localStorage.setItem('userData', JSON.stringify(location.state.userData));
      }
  }, [location.state]);

    const handleDeleteCreditCard = (index) => { // Adjusted to delete a specific card
      const updatedCreditCards = [...userData.creditCards];
      updatedCreditCards.splice(index, 1); // Remove the card at the specified index
      setUserData({ ...userData, creditCards: updatedCreditCards });
    };

    const handleDeleteAddress = () => {
      // Reset address fields instead of deleting the address object
      const updatedUserData = {
          ...userData,
          address: {
              homeAddress: '',
              city: '',
              state: '',
              postalCode: '',
              country: ''
          }
      };
      setUserData(updatedUserData);
      localStorage.setItem('userData', JSON.stringify(updatedUserData));

  };

    return (
      <div>
        <div className="profile-container">
          <h2>Profile</h2>
          <div className="profile-info">
            <p><strong>First Name:</strong> {userData.firstName}</p>
            <p><strong>Last Name:</strong> {userData.lastName}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone Number:</strong> {userData.phone}</p>
            {userData.creditCards && userData.creditCards.map((card, index) => (
              <div key={index}>
                <h2>Card {index + 1}</h2>
                <div className='card'>
                  <div> 
                  <p><strong>Number:</strong> {card.number}</p>
                  <p><strong>Expiration Date:</strong> {card.expirationDate}</p>
                  <p><strong>CVV:</strong> {card.cvv}</p>
                  </div>
                  <button onClick={() => handleDeleteCreditCard(index)}>Delete This Credit Card</button>
               </div>
                </div>
            ))}
            {userData.address && (
              <div>
                <h2>Billing Address</h2>
                <div className='style'>
                  <div> 
                  <p><strong>Home Address:</strong> {userData.address.homeAddress}</p>
                  <p><strong>City:</strong> {userData.address.city}</p>
                  <p><strong>State/Province:</strong> {userData.address.state}</p>
                  <p><strong>Postal Code:</strong> {userData.address.postalCode}</p>
                  <p><strong>Country:</strong> {userData.address.country}</p>
                  </div>
                  <button onClick={handleDeleteAddress}>Delete Address</button>
                </div>
              </div>
            )}
          </div>
          <Link to="/editprofile" state={{ userData }}>
            <button>Edit Profile</button>
          </Link>
        </div>
      </div>
    );
}

export default ProfilePage;
