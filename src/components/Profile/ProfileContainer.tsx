import React from "react";
import { Profile } from "./Profile";

import { Navigate, useMatch } from "react-router-dom";
import { connect } from "react-redux";
import {
  getUserProfile,
  UserProfileType,
} from "../../redux/ProfilePageReducer";
import { StateType } from "../../redux/ReduxStore";

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
    if (!this.props.isAuth) return <Navigate to={"/Login"} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const UrlDataContainerComponent = (props: any) => {
  // @ts-ignore
  let match = useMatch("/Profile/:userId").params.userId;

  return <ProfileContainer {...props} match={match} />;
};

export default connect(mapStateToProps, { getUserProfile })(
  UrlDataContainerComponent
);
