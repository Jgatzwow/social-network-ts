import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  UserProfileType,
} from "../../redux/ProfilePageReducer";
import { StateType } from "../../redux/ReduxStore";
import { withAuthRedirectComponent } from "../HOCs/redirectHoc/withAuthRedirectComponent";
import { withURLDataComponent } from "../HOCs/withURLdataHoc/withURLDataComponent";
import { compose } from "redux";

type MapStateToPropsType = {
  profile: UserProfileType | null;
  isAuth: boolean;
};
type MapDispatchToPropsType = {
  getUserProfile: (userId: number) => void;
};
export type UsersProfilePropsType = MapStateToPropsType &
  MapDispatchToPropsType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

class ProfileContainer extends React.Component<UsersProfilePropsType> {
  componentDidMount() {
    debugger;
    // @ts-ignore
    let userId = this.props.match;
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile }),
  withURLDataComponent,
  withAuthRedirectComponent
)(ProfileContainer);
