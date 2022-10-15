import { connect } from "react-redux";
import { Users } from "./Users";
import { StateType } from "../../redux/ReduxStore";
import { Dispatch } from "redux";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  UserType,
} from "../../redux/UsersPageReducer";

type MapStateToPropsType = {
  users: UserType[];
};
type MapDispatchToPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: UserType[]) => void;
};
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
