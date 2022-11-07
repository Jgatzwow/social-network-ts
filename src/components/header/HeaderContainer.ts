import { connect } from "react-redux";
import { getAuthUserData, setAuthUserData } from "../../redux/ AuthReducer";
import { HeaderAPIContainer } from "./HeaderAPIContainer";

type MapStateToPropsType = {
  isAuth: boolean;
  login: string | null;
};
type MapDispatchToPropsType = {
  getAuthUserData: Function;
};

export type CombinedHeaderPropsType = MapStateToPropsType &
  MapDispatchToPropsType;

const mapStateToProps = (state: any): MapStateToPropsType => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export const HeaderContainer = connect(mapStateToProps, { getAuthUserData })(
  HeaderAPIContainer
);
