import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

type PropsType = {
  login: string | null;
  isAuth: boolean;
};

const Header = (props: PropsType) => {
  const { login, isAuth } = props;
  return (
    <header className={styles.header}>
      <div className={styles.header__logo_wrapper}>
        <a href="#">
          <img
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt="logo"
          />
        </a>
      </div>
      <div className={styles.login__block}>
        {isAuth ? (
          login
        ) : (
          <NavLink className={styles.login__link} to={"/login"}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
