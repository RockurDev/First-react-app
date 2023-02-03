import React from "react";
import s from "./App.css";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
    return (
        <Router>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <Profile />
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' activeClassName={s.active} component={<Profile />} />
                        <Route path='/dialogs' element={<Dialogs />} />                        
                    </Routes>
                </div>
            </div>
        </Router>
    );
}


export default App;
