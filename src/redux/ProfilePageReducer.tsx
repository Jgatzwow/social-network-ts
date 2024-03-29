import {v1} from 'uuid';
import {PostsDataType, StateType} from './ReduxStore';
import {PhotosType} from './UsersPageReducer';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/API';
import {FormDataType} from '../components/Profile/profileDataForm/profileDataForm';
import {stopSubmit} from 'redux-form';


const initialState = {
  initialPostsState: [
    {id: v1(), post: 'hello', likes: 123},
    {id: v1(), post: 'sup', likes: 14123},
    {id: v1(), post: 'Bye', likes: 23},
    {id: v1(), post: 'Aloha', likes: 13},
  ] as Array<PostsDataType>,
  profile: null,
  status: '',
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
    case 'profile/ADD-POST':
      const newPost: PostsDataType = {
        id: v1(),
        post: action.payload.newPostText,
        likes: 0,
      };
      return {
        ...state,
        initialPostsState: [...state.initialPostsState, newPost],
      };
    case 'profile/SET-USER-PROFILE': {
      return {...state, profile: action.payload.profile};
    }
    case 'profile/SET-STATUS':
      return {...state, status: action.payload.newStatus};
    case 'profile/DELETE-POST':
      return {...state, initialPostsState: state.initialPostsState.filter(p => p.id !== action.payload.postId)}
    case 'profile/SET-PHOTO':
      // @ts-ignore
      return {...state,profile: {...state.profile, photos: action.payload.photos}}
    default:
      return state;
  }
};
type InitialStateType = typeof initialState;
export type ProfilePageActionTypes =
  | AddPostActionType
  | setUserProfileActionType
  | SetStatusActionType
  | deletePostActionType
  | setPhotoActionType;

type AddPostActionType = ReturnType<typeof addPostAC>;
type setUserProfileActionType = ReturnType<typeof setUserProfile>;
type SetStatusActionType = ReturnType<typeof setStatus>;
type deletePostActionType = ReturnType<typeof deletePostAC>;
type setPhotoActionType = ReturnType<typeof setPhoto>;

export const addPostAC = (newPostText: string) => {
  return {
    type: 'profile/ADD-POST',
    payload: {
      newPostText,
    },
  } as const;
};
export const deletePostAC = (postId: string) => {
  return {
    type: 'profile/DELETE-POST',
    payload: {
      postId,
    },
  } as const;
};

export const setUserProfile = (profile: any) => {
  return {
    type: 'profile/SET-USER-PROFILE',
    payload: {
      profile,
    },
  } as const;
};
export const setStatus = (newStatus: string) => {
  return {
    type: 'profile/SET-STATUS',
    payload: {
      newStatus,
    },
  } as const;
};
export const setPhoto = (photos: any) => {
  return {
    type: 'profile/SET-PHOTO',
    payload: {
      photos,
    },
  } as const;
};
export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
  try {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
  } catch (e) {
    console.warn(e)
  }

};
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
  try {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
  } catch (e) {
    console.warn(e)
  }

};
export const updateStatus = (newStatus: string) => async (dispatch: Dispatch) => {
  try {
    const response = await profileAPI.updateStatus(newStatus)
    if (response.data.resultCode === 0) {
      dispatch(setStatus(newStatus));
    }
  } catch (e) {
    console.warn(e)
  }

};
export const updatePhoto = (newPhoto: File) => async (dispatch: Dispatch) => {
  try {
  const response = await profileAPI.updatePhoto(newPhoto)
    if (response.data.resultCode === 0) {
      dispatch(setPhoto(response.data.data.photos))
    }
  } catch (e) {
    console.warn(e)
  }

};

export const updateProfile = (profileData: FormDataType) => async (dispatch: any, getState: () => StateType) => {
   const userId = getState().auth.userId as number
  try {
    const response = await profileAPI.updateProfile(profileData)
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId))
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : 'some error';
      dispatch(
        stopSubmit('edit-profile', {
          _error: message,
        })
      );
    }
  } catch (e) {
    console.warn(e)
  }

};