import React, { useState } from 'react';
import Header from './Header';
import './RegistrationConfirmation';
import { useLocation, useNavigate } from 'react-router-dom';

const EmailSent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); 
    const email = location.state?.email; 

    const handleClose = () => {
        setIsLoggedIn(false);
        navigate('/password-change');
    };

    return (
        <>

            <div className="dark-background">
                <div className="confirmation-card">
                    <h1>Sent Instructions</h1>
                    <p>Read the instructions carefully</p>
                    {email && (
                        <p>
                            Instructions for resetting your password have been sent to your email at {email}. Please follow the instructions that were provided in the email.
                        </p>
                    )}
                    <button onClick={handleClose} className="close-button">
                            Close 
                    </button>
                </div>
            </div>
        </>
    );
}

export default EmailSent;
