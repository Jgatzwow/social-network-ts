import React from 'react';
import styles from './Header.module.css'



const Header = () => {
    return (
        <header className={styles.header}>
            <a href="#">
                <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo"/>
            </a>
        </header>
    )
}

export default Header