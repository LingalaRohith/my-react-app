import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup/Signup";


function App() {
    return (
    <div>
        <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="signup" element={<Signup />} />
                </Routes>
        </Router>
    </div>
    )
}

export default App;