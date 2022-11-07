import { Dispatch } from "redux";
import { authAPI, instance, usersAPI } from "../api/API";
import { AxiosResponse } from "axios";
import { UserProfileType } from "./ProfilePageReducer";

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
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userId ? { ...u, followed: true } : u
        ),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userId ? { ...u, followed: false } : u
        ),
      };
    case "SET-USERS":
      return { ...state, users: action.payload.users };
    case "SET-CURRENT-PAGE":
      return { ...state, currentPage: action.payload.currentPage };
    case "SET-TOTAL-USERS-COUNT":
      return { ...state, totalUsersCount: action.payload.totalUsersCount };
    case "SET-FETCHING":
      return { ...state, isFetching: action.payload.isFetching };
    case "TOGGLE-FOLLOWING":
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

export const follow = (userId: number) => {
  return {
    type: "FOLLOW",
    payload: {
      userId,
    },
  } as const;
};
export const unfollow = (userId: number) => {
  return {
    type: "UNFOLLOW",
    payload: {
      userId,
    },
  } as const;
};
export const setUsers = (users: UserType[]) => {
  return {
    type: "SET-USERS",
    payload: {
      users,
    },
  } as const;
};
export const setCurrentPage = (currentPage: number) => {
  return {
    type: "SET-CURRENT-PAGE",
    payload: {
      currentPage,
    },
  } as const;
};
export const setTotalUsersCount = (totalUsersCount: number) => {
  return {
    type: "SET-TOTAL-USERS-COUNT",
    payload: {
      totalUsersCount,
    },
  } as const;
};
export const setFetching = (isFetching: boolean) => {
  return {
    type: "SET-FETCHING",
    payload: {
      isFetching,
    },
  } as const;
};

export const toggleFollowing = (isFetching: boolean, userId: number) => {
  return {
    type: "TOGGLE-FOLLOWING",
    payload: {
      isFetching,
      userId,
    },
  } as const;
};

export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch) => {
    dispatch(setFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      debugger;
      dispatch(setFetching(false));
      dispatch(setUsers(data.items));
    });
  };
};

export const followUser = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleFollowing(true, userId));
    usersAPI.followUser(userId).then((response: AxiosResponse) => {
      if (response.data.resultCode === 0) {
        dispatch(follow(userId));
      }
      dispatch(toggleFollowing(false, userId));
    });
  };
};

export const unfollowUser = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleFollowing(true, userId));
    usersAPI.unfollowUser(userId).then((response: AxiosResponse) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
      dispatch(toggleFollowing(false, userId));
    });
  };
};
