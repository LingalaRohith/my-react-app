import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import Header from './Header';
import './RegistrationForm.css';
import { useLocation, useNavigate } from 'react-router-dom';

const RegistrationConfirmation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); 
    const email = location.state?.email; 

    useEffect(() => {
        confetti({
            particleCount: 750,
            spread: 770,
            origin: { y: 0.6 }
        });
    }, []);

    const handleClose = () => {
        setIsLoggedIn(true);
        navigate('/');
    };

    return (
        <>
            <div className="dark-background">
                <div className="confirmation-card">
                    <h1>Registration Successful</h1>
                    <p>Your registration has been successfully completed.</p> {/* Include the email in the message */}
                    <button onClick={handleClose} className="close-button">
                        Close
                    </button>
                </div>
            </div>
        </>
    );
}

export default RegistrationConfirmation;
