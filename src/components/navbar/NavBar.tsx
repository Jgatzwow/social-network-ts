import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { SideBar } from "./SideBar/SideBar";
import { FriendsType } from "../../redux/ReduxStore";

type PropsType = {
  sideBar: Array<FriendsType>;
};

const NavBar = (props: PropsType) => {
  const { sideBar } = props;
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.item}>
          <NavLink className={styles.navbar__link} to="/Profile">
            {" "}
            Profile
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/Dialogs" className={styles.navbar__link}>
            {" "}
            Messages
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.navbar__link} to="/Users">
            {" "}
            Users
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.navbar__link} to="/Music">
            {" "}
            Music
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.navbar__link} to="/Settings">
            {" "}
            Settings
          </NavLink>
        </li>
      </ul>
      <SideBar friendsData={sideBar} />
    </nav>
  );
};

export default NavBar;
