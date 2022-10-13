import React from "react";
import { UsersPropsType } from "./UsersContainer";
import styles from "./Users.module.css";
import { v1 } from "uuid";

export const Users: React.FC<UsersPropsType> = (props) => {
  const { users, follow, unfollow, setUsers } = props;
  if (users.length === 0) {
    setUsers([
      {
        id: v1(),
        profilePic:
          "https://www.slashfilm.com/img/gallery/why-avatar-made-some-fans-physically-sick-in-theaters/l-intro-1658795359.jpg",
        name: "Michael",
        followed: false,
        status: "I am in charge",
        location: { city: "Kiev", country: "Ukraine" },
      },
      {
        id: v1(),
        profilePic:
          "https://www.slashfilm.com/img/gallery/why-avatar-made-some-fans-physically-sick-in-theaters/l-intro-1658795359.jpg",
        name: "Roma",
        followed: true,
        status: "friend",
        location: { city: "Kiev", country: "Ukraine" },
      },
      {
        id: v1(),
        profilePic:
          "https://www.slashfilm.com/img/gallery/why-avatar-made-some-fans-physically-sick-in-theaters/l-intro-1658795359.jpg",
        name: "Denis",
        followed: true,
        status: "Friend",
        location: { city: "Kiev", country: "Ukraine" },
      },
    ]);
  }
  return (
    <div>
      {users.map((u) => {
        return (
          <div key={u.id}>
            <div>
              <img
                className={styles.user__profilePic}
                src={u.profilePic}
                alt="Profile picture"
              />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => unfollow(u.id)}>unfollow</button>
              ) : (
                <button onClick={() => follow(u.id)}>follow</button>
              )}
            </div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>{u.location.city}</div>
            <div>{u.location.country}</div>
          </div>
        );
      })}
    </div>
  );
};
