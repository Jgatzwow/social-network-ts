import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/ AuthReducer";
import { StateType } from "../../redux/ReduxStore";

export type AuthDataType = {
  id: number;
  login: string;
  email: string;
};

type MapStateToPropsType = {
  isAuth: boolean;
  login: string | null;
};
type MapDispatchToPropsType = {
  logout: () => void;
};

export type CombinedHeaderPropsType = MapStateToPropsType &
  MapDispatchToPropsType;

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

class HeaderContainer extends React.Component<CombinedHeaderPropsType> {
  render() {
    return (
      <Header
        login={this.props.login}
        isAuth={this.props.isAuth}
        logout={this.props.logout}
      />
    );
  }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);
