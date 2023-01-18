import React from 'react';
import {Contact} from './contacts/Contact';
import {UserProfileType} from '../../../redux/ProfilePageReducer';

type PropsType = {
  profile: UserProfileType
  isOwner: boolean
  setEditMode: (flag: boolean) => void
}

export const ProfileData: React.FC<PropsType> = ({profile, isOwner,setEditMode}) => {
  const {lookingForAJobDescription, lookingForAJob, contacts, fullName, aboutMe, } = profile

  const toggleEditMOdeHandler = () => {
    setEditMode(true)
  }
  return (
    <div>
      <h2>{fullName}</h2>
      <p>{aboutMe}</p>
      <p>lookingForAJob: {lookingForAJob ? 'yes' : 'no'}</p>
      {lookingForAJob && <p>Description: {lookingForAJobDescription}</p>}
      <div>
        {Object.keys(contacts).map(key => {
        // @ts-ignore
        return <Contact key={key} contactTitle={key} contactValue={contacts[key]}/>
      })}
      </div>
      {isOwner && <button onClick={toggleEditMOdeHandler}>Edit Profile Info</button>}
    </div>
  );
}
