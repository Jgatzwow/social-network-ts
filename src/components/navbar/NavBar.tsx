import React from 'react';
import styles from './NavBar.module.css'
import {NavLink} from 'react-router-dom';



const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                <li className={styles.item}>
                    <NavLink className={styles.navbar__link} to='/Profile'> Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={styles.navbar__link} to='/Dialogs'> Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={styles.navbar__link} to='/Users'> Users</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={styles.navbar__link} to='/Music'> Music</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={styles.navbar__link} to='/Settings'> Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar