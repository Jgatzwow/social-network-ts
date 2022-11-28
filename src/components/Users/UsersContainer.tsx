import React from "react";
import { Users } from "./Users";
import { Preloader } from "../Common/Preloader/Preloader";
import { connect } from "react-redux";
import {
  followUser,
  setCurrentPage,
  toggleFollowing,
  unfollowUser,
  getUsers,
  UserType,
} from "../../redux/UsersPageReducer";
import { StateType } from "../../redux/ReduxStore";
import { compose } from "redux";
import { withAuthRedirectComponent } from "../HOCs/redirectHoc/withAuthRedirectComponent";
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersForMapState,
} from "../../redux/selectors/user-selectors";

type MapStateToPropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};
type MapDispatchToPropsType = {
  setCurrentPage: (currPage: number) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
};
export type UsersContainerPropsType = MapStateToPropsType &
  MapDispatchToPropsType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    users: getUsersForMapState(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingProgress(state),
  };
};

class UsersContainer extends React.Component<UsersContainerPropsType> {
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

export default compose<React.ComponentType>(
  withAuthRedirectComponent,
  connect(mapStateToProps, {
    setCurrentPage,
    toggleFollowing,
    getUsers,
    followUser,
    unfollowUser,
  })
)(UsersContainer);
