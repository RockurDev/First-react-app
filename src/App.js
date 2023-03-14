import s from './App.css'
import React from "react";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Router>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile />} />
                        <Route path='/dialogs/*' element={<DialogsContainer />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}


export default App;
