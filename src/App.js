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
                            element={<Profile 
                            profilePage={props.state.profilePage}
                            addPost={props.addPost} 
                            updateNewPostText={props.updateNewPostText}
                            />} />

                        <Route path='/dialogs/*' 
                            element={<Dialogs 
                            state={props.state.messagesPage}
                            />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}


export default App;
