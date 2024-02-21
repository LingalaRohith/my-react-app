import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from './Header';
import "./admin.css";

function AdminMain({isLoggedIn}) {
    const navigate = useNavigate(); // Hook for navigation

    // Function to navigate to different paths
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div>
            <Header isLoggedIn={isLoggedIn}/>
            <div className='admin'>
                <h1>Administrator Home Page</h1>
                <h2>Options: </h2>
                {/* Update buttons to include onClick event handlers */}
                <button onClick={() => handleNavigation('/admin/manage-users')}>Manage Users</button>
                <button onClick={() => handleNavigation('/admin/manage-movies')}>Manage Movies</button>
                <button onClick={() => handleNavigation('/admin/manage-promotions')}>Manage Promotions</button>
            </div>
        </div>
    );
}

export default AdminMain;
