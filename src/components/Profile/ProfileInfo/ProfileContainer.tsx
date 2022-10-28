import { StateType } from "../../../redux/ReduxStore";
import { connect } from "react-redux";
import {
  setUserProfile,
  UserProfileType,
} from "../../../redux/ProfilePageReducer";
import { ProfileAPIComponent } from "../ProfileAPIComponent";

type MapStateToPropsType = {
  profile: UserProfileType | null;
};
type MapDispatchToPropsType = {
  setUserProfile: (profile: any) => void;
};
export type UsersProfilePropsType = MapStateToPropsType &
  MapDispatchToPropsType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
  };
};
export const ProfileContainer = connect(mapStateToProps, { setUserProfile })(
  ProfileAPIComponent
);
