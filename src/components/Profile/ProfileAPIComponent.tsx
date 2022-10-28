import React from "react";
import { Profile } from "./Profile";
import { AxiosResponse } from "axios";
import { instance } from "../Users/UsersAPIComponent";
import { UsersProfilePropsType } from "./ProfileInfo/ProfileContainer";
import { UserProfileType } from "../../redux/ProfilePageReducer";

export class ProfileAPIComponent extends React.Component<UsersProfilePropsType> {
  componentDidMount() {
    instance
      .get<UserProfileType>(`/profile/2`)
      .then((response: AxiosResponse) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
