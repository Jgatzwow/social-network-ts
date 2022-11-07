import { connect } from "react-redux";
import { UsersAPIComponent } from "./UsersAPIComponent";
import { StateType } from "../../redux/ReduxStore";
import {
  follow,
  followUser,
  getUsers,
  setCurrentPage,
  toggleFollowing,
  unfollow,
  unfollowUser,
  UserType,
} from "../../redux/UsersPageReducer";

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
  getUsers: Function;
  followUser: Function;
  unfollowUser: Function;
};
export type UsersAPIPropsType = MapStateToPropsType & MapDispatchToPropsType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export const UsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  toggleFollowing,
  getUsers,
  followUser,
  unfollowUser,
})(UsersAPIComponent);
