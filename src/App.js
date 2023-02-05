import React from "react";
import s from './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Router>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*'
                            element={<Profile posts={props.state.profilePage.posts} />} />
                        <Route path='/dialogs/*'
                            element={<Dialogs dialogs={props.state.messagesPage.dialogs} 
                                              messages={props.state.messagesPage.messages} />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}


export default App;
