import React from 'react';
import styles from './ProfileInfo.module.css';
import profilePic from '../../../images/149071.png';
import {Preloader} from '../../Common/Preloader/Preloader';
import {UserProfileType} from '../../../redux/ProfilePageReducer';
import {ProfileStatusWithHooks} from './profileStatus/ProfileStatusWithHooks';

type PropsType = {
  profile: UserProfileType | null;
  status: string;
  updateStatus: (newStatus: string) => void;
};

export const ProfileInfo = (props: PropsType) => {
  if (!props.profile) return <Preloader/>
  const {
    photos,
    aboutMe,
    fullName,
    lookingForAJobDescription,
    lookingForAJob,
    contacts,
  } = props.profile;

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
          <img src={photos.small || profilePic} alt="ProfilePic"/>
        </div>
        <div>
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <h2>{fullName}</h2>
          <p>{aboutMe}</p>
          <p>lookingForAJob{lookingForAJob}</p>
          <p>Description: {lookingForAJobDescription}</p>
          <div>Contacts:</div>
          <p>{contacts.twitter}</p>
          <p>{contacts.vk}</p>
          <p>{contacts.github}</p>
          <p>{contacts.youtube}</p>
          <p>{contacts.instagram}</p>
        </div>
      </div>
    </div>
  );
};
