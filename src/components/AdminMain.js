import React, { useState } from 'react';
import Header from './Header';
import "./admin.css"

function AdminMain({isLoggedIn}) {
    return (
        <div>
            <Header isLoggedIn={isLoggedIn}/>
            <div className='admin'>
                <h1>Administrator Home Page</h1>
                <h2>Options: </h2>
                <button>Manage Users</button>
                <button>Manage Movies</button>
                <button>Manage Promotions</button>
            </div>
        </div>

        
    );
    
}

export default AdminMain;