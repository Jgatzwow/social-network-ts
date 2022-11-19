import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { StateType } from "../../../redux/ReduxStore";

type MapStateToPropsType = {
  isAuth: boolean;
};

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export function withAuthRedirectComponent<T>(
  Component: React.ComponentType<T>
) {
  const RedirectComponent = (props: MapStateToPropsType) => {
    const { isAuth, ...restProps } = props;
    if (!props.isAuth) return <Navigate to={"/Login"} />;
    return <Component {...(restProps as T)} />;
  };

  const ConnectedRedirectComponent =
    connect(mapStateToProps)(RedirectComponent);
  return ConnectedRedirectComponent;
}
