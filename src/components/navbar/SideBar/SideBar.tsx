import React from "react";
import { Friend } from "./Friend/Friend";

import styles from "./SideBar.module.css";
import { FriendsType } from "../../../redux/ReduxStore";

type PropsType = {
  friendsData: Array<FriendsType>;
};

export const SideBar = (props: PropsType) => {
  const { friendsData } = props;
  return (
    <div>
      <h3 className={styles.sideBar__title}>Friends</h3>
      {friendsData.map((f) => {
        return (
          <Friend
            key={f.id}
            friendsName={f.friendsName}
            friendsAva={f.friendsAva}
          />
        );
      })}
    </div>
  );
};
