import React from "react";
import { UsersAPIPropsType } from "./UsersContainer";
import axios, { AxiosResponse } from "axios";
import { UserType } from "../../redux/UsersPageReducer";
import { Users } from "./Users";
import { Preloader } from "../Common/Preloader/Preloader";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "api-key": "c3e11594-611c-4916-b709-940cf6a62b5d" },
});

export class UsersAPIComponent extends React.Component<UsersAPIPropsType> {
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    if (this.props.users.length === 0) {
      this.props.setFetching(true);
      instance
        .get<UserType[]>(
          `/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response: AxiosResponse) => {
          this.props.setFetching(false);

          this.props.setUsers(response.data.items);
          // this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  };
  onPageChangeHandler = (p: number) => {
    this.props.setFetching(true);
    this.props.setCurrentPage(p);
    instance
      .get<UserType[]>(`/users?page=${p}&count=${this.props.pageSize}`)
      .then((response: AxiosResponse) => {
        this.props.setFetching(false);

        this.props.setUsers(response.data.items);
        this.props.setFetching(false);
      });
  };

  render() {
    if (this.props.isFetching) return <Preloader />;
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        onPageChangeHandler={this.onPageChangeHandler}
        currentPage={this.props.currentPage}
        users={this.props.users}
        pageSize={this.props.pageSize}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}
