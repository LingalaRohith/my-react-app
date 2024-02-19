import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import './RegistrationForm.css'; 

const RegistrationConfirmation = () => {
    useEffect(() => {
        confetti({
            particleCount: 750,
            spread: 770,
            origin: { y: 0.6 }
        });
    }, []);

    return (
        <div className="dark-background">
            <div className="confirmation-card">
                <h1>Registration Successful</h1>
                <p>Your registration has been successfully completed.</p>
            </div>
        </div>
    );
}

export default RegistrationConfirmation;