import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {
  getStatus,
  getUserProfile, updatePhoto, updateProfile,
  updateStatus,
  UserProfileType,
} from '../../redux/ProfilePageReducer';
import {StateType} from '../../redux/ReduxStore';
import {withAuthRedirectComponent} from '../HOCs/redirectHoc/withAuthRedirectComponent';
import {withURLDataComponent} from '../HOCs/withURLdataHoc/withURLDataComponent';
import {compose} from 'redux';
import {FormDataType} from './profileDataForm/profileDataForm';

type MapStateToPropsType = {
  profile: UserProfileType | null;
  status: string;
  userId: number | null;
  isAuth: boolean;
};
type MapDispatchToPropsType = {
  getUserProfile: (userId: number | null) => void;
  getStatus: (userId: number | null) => void;
  updateStatus: (newStatus: string) => void;
  updatePhoto: (newPhoto: File) => void;
  updateProfile: (data: FormDataType) => void;
};

type OwnPropsType = {
  match: number | null;
};

export type UsersProfilePropsType = OwnPropsType &
  MapStateToPropsType &
  MapDispatchToPropsType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

class ProfileContainer extends React.Component<UsersProfilePropsType> {
  refreshProfile() {
    let userId = this.props.match;
    if (!userId) {
      userId = this.props.userId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<UsersProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.match !== prevProps.match) {
      this.refreshProfile()
    }
  }


  render() {
    return (
      <Profile
        {...this.props}
        updateProfile={this.props.updateProfile}
        isOwner={this.props.userId === Number(this.props.match)}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        updatePhoto={this.props.updatePhoto}
      />
    );
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, updatePhoto, updateProfile}),
  withURLDataComponent,
  withAuthRedirectComponent
)(ProfileContainer);
