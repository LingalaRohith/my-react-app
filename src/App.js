import React, { useState } from "react";
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

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
    <div>
        <Router>
                <Routes>
                    <Route path="/registration-confirmation" element={<RegistrationConfirmation />} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="login" element={<Login />} />
                    <Route path="moviespage" element={<MoviesPage />} />
                    <Route path="verification" element={<Verification />} />
                    <Route path="editprofile" element={<EditProfile isLoggedIn={true} />} />
                    <Route path="admin" element={<AdminMain isLoggedIn={true} />} />
                    <Route path="movie-info" element={<MovieInformationPage />}/>
                    <Route path="/" component={<LandingPage />} />
                    <Route path="admin/manage-users" element={<ManageUsers />} />
                    <Route path="admin/manage-movies" element={<ManageMovies />} />
                    <Route path="admin/manage-promotions" element={<ManagePromotions />} />
                </Routes>
        </Router>
    </div>
    );
}

export default App;
