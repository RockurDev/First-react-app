import s from './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer'
import DialogsContainer from "./components/Dialogs/DialogsContainer";


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
                        <Route path='/users/*' element={<UsersContainer />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}


export default App;
