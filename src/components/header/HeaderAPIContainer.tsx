import React from "react";
import Header from "./Header";
import { CombinedHeaderPropsType } from "./HeaderContainer";

export type AuthDataType = {
  id: number;
  login: string;
  email: string;
};

export class HeaderAPIContainer extends React.Component<CombinedHeaderPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header login={this.props.login} isAuth={this.props.isAuth} />;
  }
}
