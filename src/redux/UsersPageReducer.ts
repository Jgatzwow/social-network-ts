import {Dispatch} from 'redux';
import {usersAPI} from '../api/API';

type UsersType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

export type UserType = {
  id: number;
  photos: PhotosType;
  name: string;
  followed: boolean;
  status: string | null;
  uniqueUrlName: string | null;
};
export type PhotosType = {
  small: string | null;
  large: string | null;
};
const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 2,
  isFetching: false,
  followingInProgress: [],
};
export const usersPageReducer = (
  state: InitialStateType = initialState,
  action: UsersPageActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'userPage/FOLLOW':
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userId ? {...u, followed: true} : u
        ),
      };
    case 'userPage/UNFOLLOW':
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userId ? {...u, followed: false} : u
        ),
      };
    case 'userPage/SET-USERS':
      return {...state, users: action.payload.users};
    case 'userPage/SET-CURRENT-PAGE':
      return {...state, currentPage: action.payload.currentPage};
    case 'userPage/SET-TOTAL-USERS-COUNT':
      return {...state, totalUsersCount: action.payload.totalUsersCount};
    case 'userPage/SET-FETCHING':
      return {...state, isFetching: action.payload.isFetching};
    case 'userPage/TOGGLE-FOLLOWING':
      return {
        ...state,
        followingInProgress: action.payload.isFetching
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter(
            (id) => id !== action.payload.userId
          ),
      };
    default:
      return state;
  }
};

// Types

type InitialStateType = typeof initialState | UsersType;
export type UsersPageActionTypes =
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | setCurrentPageACType
  | setTotalUsersCountACType
  | setFetchingACType
  | toggleFollowingACType;

type FollowActionType = ReturnType<typeof follow>;
type UnfollowActionType = ReturnType<typeof unfollow>;
type SetUsersActionType = ReturnType<typeof setUsers>;
type setCurrentPageACType = ReturnType<typeof setCurrentPage>;
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>;
type setFetchingACType = ReturnType<typeof setFetching>;
type toggleFollowingACType = ReturnType<typeof toggleFollowing>;

// Action Creators

export const follow = (userId: number) => {
  return {
    type: 'userPage/FOLLOW',
    payload: {
      userId,
    },
  } as const;
};
export const unfollow = (userId: number) => {
  return {
    type: 'userPage/UNFOLLOW',
    payload: {
      userId,
    },
  } as const;
};
export const setUsers = (users: UserType[]) => {
  return {
    type: 'userPage/SET-USERS',
    payload: {
      users,
    },
  } as const;
};
export const setCurrentPage = (currentPage: number) => {
  return {
    type: 'userPage/SET-CURRENT-PAGE',
    payload: {
      currentPage,
    },
  } as const;
};
export const setTotalUsersCount = (totalUsersCount: number) => {
  return {
    type: 'userPage/SET-TOTAL-USERS-COUNT',
    payload: {
      totalUsersCount,
    },
  } as const;
};
export const setFetching = (isFetching: boolean) => {
  return {
    type: 'userPage/SET-FETCHING',
    payload: {
      isFetching,
    },
  } as const;
};

export const toggleFollowing = (isFetching: boolean, userId: number) => {
  return {
    type: 'userPage/TOGGLE-FOLLOWING',
    payload: {
      isFetching,
      userId,
    },
  } as const;
};

// Thunks

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
  dispatch(setFetching(true));
  try {
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setFetching(false));
    dispatch(setUsers(data.items));
  } catch (e) {
    console.warn(e)
  }

};

export const followUser = (userId: number) => async (dispatch: Dispatch) => {
  dispatch(toggleFollowing(true, userId));
  try {
    const response = await usersAPI.followUser(userId)
    if (response.data.resultCode === 0) {
      dispatch(follow(userId));
    }
    dispatch(toggleFollowing(false, userId));
  } catch (e) {
    console.warn(e)
  }


};

export const unfollowUser = (userId: number) => async (dispatch: Dispatch) => {
  dispatch(toggleFollowing(true, userId));
  try {
    const response = await usersAPI.unfollowUser(userId)
    if (response.data.resultCode === 0) {
      dispatch(unfollow(userId));
    }
    dispatch(toggleFollowing(false, userId));

  } catch (e) {
    console.warn(e)
  }

};
