import { v1 } from "uuid";
import { PostsDataType } from "./ReduxStore";
import { PhotosType } from "./UsersPageReducer";
import { Dispatch } from "redux";
import { profileAPI } from "../api/API";
import { AxiosResponse } from "axios";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_INPUT = "UPDATE-NEW-POST-INPUT";

const initialState = {
  initialPostsState: [
    { id: v1(), post: "hello", likes: 123 },
    { id: v1(), post: "sup", likes: 14123 },
    { id: v1(), post: "Bye", likes: 23 },
    { id: v1(), post: "Aloha", likes: 13 },
  ] as Array<PostsDataType>,
  postMessage: "",
  profile: null,
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
        post: state.postMessage,
        likes: 0,
      };
      return {
        ...state,
        initialPostsState: [...state.initialPostsState, newPost],
        postMessage: "",
      };
    case UPDATE_NEW_POST_INPUT:
      state.postMessage = action.payload.newPostMessage;
      return { ...state, postMessage: action.payload.newPostMessage };
    case "SET-USER-PROFILE": {
      debugger;
      return { ...state, profile: action.payload.profile };
    }

    default:
      return state;
  }
};
type InitialStateType = typeof initialState;
export type ProfilePageActionTypes =
  | AddPostActionType
  | UpdateNewPostInputActionType
  | setUserProfileActionType;

type AddPostActionType = ReturnType<typeof addPostAC>;
type UpdateNewPostInputActionType = ReturnType<typeof updateNewPostInputAC>;
type setUserProfileActionType = ReturnType<typeof setUserProfile>;

export const addPostAC = () => {
  return {
    type: "ADD-POST",
  } as const;
};
export const updateNewPostInputAC = (newPostMessage: string) => {
  return {
    type: "UPDATE-NEW-POST-INPUT",
    payload: {
      newPostMessage,
    },
  } as const;
};

export const setUserProfile = (profile: any) => {
  debugger;
  return {
    type: "SET-USER-PROFILE",
    payload: {
      profile,
    },
  } as const;
};

export const getUserProfile = (userId: number) => {
  debugger;
  return (dispatch: Dispatch) => {
    debugger;
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};
