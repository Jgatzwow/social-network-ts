import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  getStatus,
  getUserProfile,
  updateStatus,
  UserProfileType,
} from "../../redux/ProfilePageReducer";
import { StateType } from "../../redux/ReduxStore";
import { withAuthRedirectComponent } from "../HOCs/redirectHoc/withAuthRedirectComponent";
import { withURLDataComponent } from "../HOCs/withURLdataHoc/withURLDataComponent";
import { compose } from "redux";

type MapStateToPropsType = {
  profile: UserProfileType | null;
  status: string;
  userId: number | null;
  isAuth: boolean;
};
type MapDispatchToPropsType = {
  getUserProfile: (userId: number | null) => void;
  getStatus: (userId: number | null) => void;
  updateStatus: (newStatus: string) => void;
};

type OwnPropsType = {
  match: number | null;
};

export type UsersProfilePropsType = OwnPropsType &
  MapStateToPropsType &
  MapDispatchToPropsType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

class ProfileContainer extends React.Component<UsersProfilePropsType> {
  componentDidMount() {
    let userId = this.props.match;
    if (!userId) {
      userId = this.props.userId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withURLDataComponent,
  withAuthRedirectComponent
)(ProfileContainer);
