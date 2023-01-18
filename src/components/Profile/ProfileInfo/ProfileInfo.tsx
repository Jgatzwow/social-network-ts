import React, {ChangeEvent, useState} from 'react';
import styles from './ProfileInfo.module.css';
import profilePic from '../../../images/149071.png';
import {Preloader} from '../../Common/Preloader/Preloader';
import {UserProfileType} from '../../../redux/ProfilePageReducer';
import {ProfileStatusWithHooks} from './profileStatus/ProfileStatusWithHooks';
import ProfileDataForm, {FormDataType} from '../profileDataForm/profileDataForm';
import {ProfileData} from './ProfileData';

type PropsType = {
  profile: UserProfileType | null;
  status: string;
  updateStatus: (newStatus: string) => void;
  updatePhoto: (newPhoto: File) => void;
  updateProfile: (data: FormDataType) => void;
  isOwner: boolean
};

export const ProfileInfo: React.FC<PropsType> = ({profile, isOwner, updatePhoto, updateStatus, status,updateProfile}) => {
  const [editMode, setEditMode] = useState(false)


  const onChangeProfilePickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.length) {
      updatePhoto(e.target.files[0])
    }
  }
  const onSubmit =  (formData: FormDataType) => {
    updateProfile(formData)
    setEditMode(false)
  }
  if (!profile) return <Preloader/>
  return (
    <div>
      <div className={styles.profile__bg}>
        <img
          src="https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/beach-sunset-i102003.jpg"
          alt="bg"
        />
      </div>
      <div className={styles.ava__description_wrapper}>
        <div className={styles.profile__pic}>
          <img src={profile.photos.small || profilePic} alt="ProfilePic"/>
          {isOwner && <input onChange={onChangeProfilePickHandler} type="file"/>}
        </div>
        {editMode ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} /> :
          <ProfileData profile={profile} isOwner={isOwner} setEditMode={setEditMode}/>}
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  );
};
