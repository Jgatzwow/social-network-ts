import React from "react";
import styles from "./Users.module.css";
import defaultProfilePic from "../../images/149071.png";
import { UserType } from "../../redux/UsersPageReducer";
import { NavLink } from "react-router-dom";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChangeHandler: (currPage: number) => void;
  users: UserType[];
  followingInProgress: number[];
  followUser: Function;
  unfollowUser: Function;
};

export const Users = (props: PropsType) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p, idx) => {
          return (
            <span
              key={idx}
              onClick={() => props.onPageChangeHandler(p)}
              className={props.currentPage === p ? styles.selected__page : ""}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div>
        {props.users.map((u) => {
          return (
            <div key={u.id}>
              <div>
                <NavLink to={"/Profile/2" + u.id}>
                  <img
                    className={styles.user__profilePic}
                    src={u.photos.small ? u.photos.small : defaultProfilePic}
                    alt="Profile"
                  />{" "}
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unfollowUser(u.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.followUser(u.id);
                    }}
                  >
                    follow
                  </button>
                )}
              </div>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div>city</div>
              <div>country</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
