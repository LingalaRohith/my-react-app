import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MoviesPage from "./components/MoviesPage";
import Verification from "./components/Verification";
import RegistrationConfirmation from './components/RegistrationConfirmation';
import EditProfile from "./components/EditProfile";
import AdminMain from "./components/AdminMain";
import MovieInformationPage from "./components/MovieInformationPage";
import ManageUsers from "./components/ManageUsers"; 
import ManageMovies from "./components/ManageMovies"; 
import ManagePromotions from "./components/ManagePromotions"; 
import BookSeats from "./components/BookSeats";
import OrderSummary from "./components/OrderSummary";
import OrderConfirmation from "./components/OrderConfirmation"; 
import Checkout from "./components/Checkout"; 
import ProfilePage from "./components/ProfilePage";
import ForgotPassword from "./components/ForgotPassword";
import EmailSent from "./components/EmailSent"
import PasswordChange from "./components/PasswordChange";
import PasswordConfirmation from './components/PasswordConfirmation';

function App() {
    const [isLoggedIn, setLoggedIn] = useState(true);

    return (
    <div>
        <Router>
                <Routes>
                    <Route path="/registration-confirmation" element={<RegistrationConfirmation />} />
                    <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="login" element={<Login />} />
                    <Route path="moviespage" element={<MoviesPage />} />
                    <Route path="verification" element={<Verification />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="email-sent" element={<EmailSent />} />
                    <Route path="password-change" element={<PasswordChange />} />
                    <Route path="password-confirmation" element={<PasswordConfirmation />} />
                    <Route path="editprofile" element={<EditProfile isLoggedIn={true} />} />
                    <Route path="admin" element={<AdminMain isLoggedIn={true} />} />
                    <Route path="movie-info" element={<MovieInformationPage isLoggedIn={true}/>}/>
                    <Route path="/" component={<LandingPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />
                    <Route path="admin/manage-users" element={<ManageUsers isLoggedIn={true}/>} />
                    <Route path="admin/manage-movies" element={<ManageMovies isLoggedIn={true}/>} />
                    <Route path="admin/manage-promotions" element={<ManagePromotions isLoggedIn={true}/>} />
                    <Route path="bookseats" element={<BookSeats isLoggedIn={true}/>} />
                    <Route path="ordersummary" element={<OrderSummary isLoggedIn={true}/>} />
                    <Route path="/order-confirmation" element={<OrderConfirmation isLoggedIn={true}/>} />
                    <Route path="/checkout" element={<Checkout isLoggedIn={true}/>} />
                    <Route path="/profilepage" element={<ProfilePage isLoggedIn={true}/>} />
                </Routes>
        </Router>
    </div>
    );
}

export default App;
