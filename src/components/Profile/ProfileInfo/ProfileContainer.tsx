import { connect } from "react-redux";
import {
  getUserProfile,
  UserProfileType,
} from "../../../redux/ProfilePageReducer";
import { ProfileAPIComponent } from "../ProfileAPIComponent";

type MapStateToPropsType = {
  profile: UserProfileType | null;
  isAuth: boolean;
};
type MapDispatchToPropsType = {
  getUserProfile: Function;
};
export type UsersProfilePropsType = MapStateToPropsType &
  MapDispatchToPropsType;
const mapStateToProps = (state: any): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

/*let UrlDataContainerComponent = (props: any) => {
  let match = useMatch("/Profile/:userId").params.userId;
 // ParamParseKey<Path>, Path extends string>(pattern: PathPattern<Path> | Path): PathMatch<ParamKey> | null;
  return <ProfileContainer {...props} match={match} />;
};*/

export const ProfileContainer = connect(mapStateToProps, { getUserProfile })(
  ProfileAPIComponent
);
