import React, { useState } from 'react';
import Header from './Header';

function OrderConfirmation({isLoggedIn}) {
    return (
      <div>  
        <Header isLoggedIn={isLoggedIn}/>
      </div>
      
    );
  }
  
  export default OrderConfirmation;