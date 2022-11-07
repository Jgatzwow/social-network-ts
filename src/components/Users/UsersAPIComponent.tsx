import React from "react";
import { UsersAPIPropsType } from "./UsersContainer";
import { Users } from "./Users";
import { Preloader } from "../Common/Preloader/Preloader";

export class UsersAPIComponent extends React.Component<UsersAPIPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChangeHandler = (p: number) => {
    this.props.getUsers(p, this.props.pageSize);
    this.props.setCurrentPage(p);
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
        followingInProgress={this.props.followingInProgress}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
      />
    );
  }
}
