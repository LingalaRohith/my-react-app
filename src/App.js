import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import MoviesPage from "./components/MoviesPage";
import Verification from "./components/Verification";


function App() {

    return (
    <div>
        <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="login" element={<Login />} />
                    <Route path="moviespage" element={<MoviesPage />} />
                    <Route path="verification" element={<Verification />} />
                </Routes>
        </Router>
    </div>
    )
}

export default App;