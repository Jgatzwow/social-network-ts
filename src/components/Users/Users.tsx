import React from 'react';
import {UserType} from '../../redux/UsersPageReducer';
import {Paginator} from './Paginator/Paginator';
import {User} from './User/User';

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChangeHandler: (currPage: number) => void;
  users: UserType[];
  followingInProgress: number[];
  followUser: Function;
  unfollowUser: Function;
};

export const Users: React.FC<PropsType> = (
  {
    users,
    followUser,
    unfollowUser,
    totalUsersCount,
    followingInProgress,
    pageSize,
    currentPage,
    onPageChangeHandler
  }) => {

  return (
    <div>
      <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                 onPageChangeHandler={onPageChangeHandler}/>
      <div>
        {users.map((u) => {
          return (
            <User key={u.id} followUser={followUser} followingInProgress={followingInProgress}
                  unfollowUser={unfollowUser} user={u}/>
          );
        })}
      </div>
    </div>
  )
    ;
};
