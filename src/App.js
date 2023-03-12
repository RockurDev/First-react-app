import React from "react";
import s from './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
<<<<<<< HEAD
import Dialogs from "./components/Dialogs/Dialogs";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
=======
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
>>>>>>> 36bef21 (add context API)


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Router>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
<<<<<<< HEAD
                        <Route path='/profile/*'
                               element={<Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch} />} />

                        <Route path='/dialogs/*'
                               element={<Dialogs store={props.store} />} />
=======
                        <Route path='/profile/*' element={<Profile />} />
                        <Route path='/dialogs/*' element={<DialogsContainer />} />
>>>>>>> 36bef21 (add context API)
                    </Routes>
                </div>
            </Router>
        </div>
    );
}


export default App;
