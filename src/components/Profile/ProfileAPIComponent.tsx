import React from "react";
import { Profile } from "./Profile";

import { UsersProfilePropsType } from "./ProfileInfo/ProfileContainer";
import { Navigate } from "react-router-dom";

export class ProfileAPIComponent extends React.Component<UsersProfilePropsType> {
  componentDidMount() {
    this.props.getUserProfile(2);
  }

  render() {
    if (!this.props.isAuth) return <Navigate to={"/Login"} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
