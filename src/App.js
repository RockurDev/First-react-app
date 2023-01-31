// import React from "react";
// import "./App.css";
<link rel="stylesheets" href="./App.css"></link>;


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-nqRycJhFNrnzpkQ3oI6vWvslHm71jjXAg&usqp=CAU' alt='picture 1'></img>
            </header>
            <nav className='nav'>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">Friends</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
            <div className='content'>
                <img src='https://images.unsplash.com/photo-1664023937999-5937f62d0f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2489&q=80' alt='picture 2'></img>
                Main content
            </div>
        </div>
    );
}

export default App;
