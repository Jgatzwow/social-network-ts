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
};
type MapDispatchToPropsType = {
  getUserProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (newStatus: string) => void;
};
export type UsersProfilePropsType = MapStateToPropsType &
  MapDispatchToPropsType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

class ProfileContainer extends React.Component<UsersProfilePropsType> {
  componentDidMount() {
    // @ts-ignore
    let userId = this.props.match;
    if (!userId) {
      userId = 26179;
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
