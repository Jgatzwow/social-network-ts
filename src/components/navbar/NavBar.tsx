import React from 'react';
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                <li className={styles.item}>
                    <a className={styles.navbar__link} href='#'> Profile</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.navbar__link} href='#'> Messages</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.navbar__link} href='#'> Users</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.navbar__link} href='#'> Music</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.navbar__link} href='#'> Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar