import React from "react";
import s from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <p>
                    <li className={`${s.item} ${s.active}`}>
                        <a href="#">Profile</a>
                    </li>
                </p>
                <p>
                    <li className={`${s.item} ${s.active}`}>
                        <a href="#">News</a>
                    </li>
                </p>
                <p>
                    <li className={`${s.item} ${s.active}`}>
                        <a href="#">Messages</a>
                    </li>
                </p>
                <p>
                    <li className={`${s.item} ${s.active}`}>
                        <a href="#">Friends</a>
                    </li>
                </p>
                <p>
                    <li className={`${s.item} ${s.active}`}>
                        <a href="#">Music</a>
                    </li>
                </p>
                <p>
                    <li className={`${s.item} ${s.active}`}>
                        <a href="#">Settings</a>
                    </li>
                </p>
            </ul>
        </nav>)
};


export default Navbar;