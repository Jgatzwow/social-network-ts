import React from "react";
import { FormDataType, ReduxLoginForm } from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/ AuthReducer";
import { Navigate } from "react-router-dom";
import { StateType } from "../../redux/ReduxStore";

type MapStateToPropsType = {
  isAuth: boolean;
};
type MapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void;
};
type LoginType = MapStateToPropsType & MapDispatchToPropsType;

const Login = (props: LoginType) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) return <Navigate to={"/"} />;
  return (
    <div>
      <h2>Login</h2>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
