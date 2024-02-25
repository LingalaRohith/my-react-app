import React, { useState } from 'react';
import Header from './Header';

function ManageMovies({isLoggedIn}) {
    return (
      <div>  
        <Header isLoggedIn={isLoggedIn}/>
      </div>
      
    );
  }
  
  export default ManageMovies;