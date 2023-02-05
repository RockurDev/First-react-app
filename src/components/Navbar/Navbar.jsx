import React from "react";
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <p><NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink></p>
                </li>
                <li className={s.item}>
                    <p><NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink></p>
                </li>
                <li className={s.item}>
                    <p><NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink></p>
                </li>
                <li className={s.item}>
                    <p><NavLink to='/friends' className={navData => navData.isActive ? s.active : s.item}>Friends</NavLink></p>
                </li>
                <li className={s.item}>
                    <p><NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink></p>
                </li>
                <li className={s.item}>
                    <p><NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink></p>
                </li>
            </ul>
        </nav>)
};


export default Navbar;