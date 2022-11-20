import { v1 } from "uuid";
import { PostsDataType } from "./ReduxStore";
import { PhotosType } from "./UsersPageReducer";
import { Dispatch } from "redux";
import { profileAPI } from "../api/API";

export const ADD_POST = "ADD-POST";

const initialState = {
  initialPostsState: [
    { id: v1(), post: "hello", likes: 123 },
    { id: v1(), post: "sup", likes: 14123 },
    { id: v1(), post: "Bye", likes: 23 },
    { id: v1(), post: "Aloha", likes: 13 },
  ] as Array<PostsDataType>,
  profile: null,
  status: "",
};

export type UserProfileType = {
  aboutMe: string;
  contacts: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: PhotosType;
};
export type ContactsType = {
  facebook: string | null;
  website: string | null;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  youtube: string | null;
  github: string | null;
  mainLink: string | null;
};
export const profilePageReducer = (
  state: InitialStateType = initialState,
  action: ProfilePageActionTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostsDataType = {
        id: v1(),
        post: action.payload.newPostText,
        likes: 0,
      };
      return {
        ...state,
        initialPostsState: [...state.initialPostsState, newPost],
      };
    case "SET-USER-PROFILE": {
      return { ...state, profile: action.payload.profile };
    }
    case "SET-STATUS":
      return { ...state, status: action.payload.newStatus };
    default:
      return state;
  }
};
type InitialStateType = typeof initialState;
export type ProfilePageActionTypes =
  | AddPostActionType
  | setUserProfileActionType
  | SetStatusActionType;

type AddPostActionType = ReturnType<typeof addPostAC>;
type setUserProfileActionType = ReturnType<typeof setUserProfile>;
type SetStatusActionType = ReturnType<typeof setStatus>;

export const addPostAC = (newPostText: string) => {
  return {
    type: "ADD-POST",
    payload: {
      newPostText,
    },
  } as const;
};

export const setUserProfile = (profile: any) => {
  return {
    type: "SET-USER-PROFILE",
    payload: {
      profile,
    },
  } as const;
};
export const setStatus = (newStatus: string) => {
  return {
    type: "SET-STATUS",
    payload: {
      newStatus,
    },
  } as const;
};

export const getUserProfile = (userId: number) => {
  return (dispatch: Dispatch) => {
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};
export const getStatus = (userId: number) => {
  return (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};
export const updateStatus = (newStatus: string) => {
  return (dispatch: Dispatch) => {
    profileAPI.updateStatus(newStatus).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(newStatus));
      }
    });
  };
};
