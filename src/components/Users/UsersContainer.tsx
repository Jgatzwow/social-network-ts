import { connect } from "react-redux";
import { UsersAPIComponent } from "./UsersAPIComponent";
import { StateType } from "../../redux/ReduxStore";
import {
  follow,
  setCurrentPage,
  setFetching,
  setTotalUsersCount,
  setUsers,
  unfollow,
  UserType,
} from "../../redux/UsersPageReducer";

type MapStateToPropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
};
type MapDispatchToPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (currPage: number) => void;
  setTotalUsersCount: (totalUsersCount: number) => void;
  setFetching: (isFetching: boolean) => void;
};
export type UsersAPIPropsType = MapStateToPropsType & MapDispatchToPropsType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};
/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currPage: number) => {
      dispatch(setCurrentPageAC(currPage));
    },
    setTotalUsersCount: (totalUsersCount: number) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
    setFetching: (isFetching: boolean) => {
      dispatch(setFetchingAC(isFetching));
    },
  };
};*/

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setFetching,
})(UsersAPIComponent);
