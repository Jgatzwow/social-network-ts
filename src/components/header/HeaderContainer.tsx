import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/ AuthReducer";
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
  getAuthUserData: () => void;
};

export type CombinedHeaderPropsType = MapStateToPropsType &
  MapDispatchToPropsType;

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

class HeaderContainer extends React.Component<CombinedHeaderPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header login={this.props.login} isAuth={this.props.isAuth} />;
  }
}

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
