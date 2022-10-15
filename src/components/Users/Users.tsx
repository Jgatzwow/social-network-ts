import React from "react";
import { UsersPropsType } from "./UsersContainer";
import styles from "./Users.module.css";
import axios, { AxiosResponse } from "axios";
import defaultProfilePic from "../../images/149071.png";
import { UserType } from "../../redux/UsersPageReducer";

export class Users extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    debugger;
    if (this.props.users.length === 0) {
      const instance = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: { "api-key": "c3e11594-611c-4916-b709-940cf6a62b5d" },
      });
      instance.get<UserType[]>("/users").then((response: AxiosResponse) => {
        this.props.setUsers(response.data.items);
      });
    }
  };
  render() {
    return (
      <div>
        <div>
          {this.props.users.map((u) => {
            return (
              <div key={u.id}>
                <div>
                  <img
                    className={styles.user__profilePic}
                    src={u.photos.small ? u.photos.small : defaultProfilePic}
                    alt="Profile"
                  />
                </div>
                <div>
                  {u.followed ? (
                    <button onClick={() => this.props.unfollow(u.id)}>
                      unfollow
                    </button>
                  ) : (
                    <button onClick={() => this.props.follow(u.id)}>
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
  }
}
