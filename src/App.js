import React from "react";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import s from "./App.css";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Router>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route exact path='/profile' element={<Profile />} />
                        <Route exact path='/dialogs' element={<Dialogs />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}


export default App;
