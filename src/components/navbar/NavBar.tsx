import React from 'react';
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li>
                    <a href='#'> Profile</a>
                </li>
                <li>
                    <a href='#'> Messages</a>
                </li>
                <li>
                    <a href='#'> Users</a>
                </li>
                <li>
                    <a href='#'> Music</a>
                </li>
                <li>
                    <a href='#'> Settings</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar