import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../Users.module.css';
import defaultProfilePic from '../../../images/149071.png';
import {UserType} from '../../../redux/UsersPageReducer';

type PropsType = {
  user: UserType
  followingInProgress: number[];
  followUser: Function;
  unfollowUser: Function;
}

export const User: React.FC<PropsType> = ({user, followUser, unfollowUser, followingInProgress}) => {
  return (
    <div key={user.id}>
      <div>
        <NavLink to={'/Profile/' + user.id}>
          <img
            className={styles.user__profilePic}
            src={user.photos.small ? user.photos.small : defaultProfilePic}
            alt="Profile"
          />{' '}
        </NavLink>
      </div>
      <div>
        {user.followed ? (
          <button
            disabled={followingInProgress.some(
              (id) => id === user.id
            )}
            onClick={() => {
              unfollowUser(user.id);
            }}
          >
            unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some(
              (id) => id === user.id
            )}
            onClick={() => {
              followUser(user.id);
            }}
          >
            follow
          </button>
        )}
      </div>
      <div>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </div>
      <div>city</div>
      <div>country</div>
    </div>
  );
};
