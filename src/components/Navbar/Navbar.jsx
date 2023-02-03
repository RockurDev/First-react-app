import React from "react";
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item}`}>
                    <p><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></p>
                </li>
                <li className={`${s.item}`}>
                    <p><NavLink to='/dialogs' >Messages</NavLink></p>
                </li>
                <li className={`${s.item}`}>
                    <p><NavLink to='/news'>News</NavLink></p>
                </li>
                <li className={`${s.item}`}>
                    <p><NavLink to='friends'>Friends</NavLink></p>
                </li>
                <li className={`${s.item}`}>
                    <p><NavLink to='/music'>Music</NavLink></p>
                </li>
                <li className={`${s.item}`}>
                    <p><NavLink to='/settings'>Settings</NavLink></p>
                </li>
            </ul>
        </nav>)
};


export default Navbar;