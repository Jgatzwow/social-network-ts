import { v1 } from "uuid";
import { PostsDataType } from "./ReduxStore";

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
    default:
      return state;
  }
};
type InitialStateType = typeof initialState;
export type ProfilePageActionTypes =
  | AddPostActionType
  | UpdateNewPostInputActionType;

type AddPostActionType = ReturnType<typeof addPostAC>;
type UpdateNewPostInputActionType = ReturnType<typeof updateNewPostInputAC>;

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
