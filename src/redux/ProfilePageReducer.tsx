import {
  ActionsType,
  AddPostActionType,
  PostsDataType,
  ProfilePageType,
  UpdateNewPostInputActionType,
} from "./store";
import { v1 } from "uuid";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_INPUT = "UPDATE-NEW-POST-INPUT";

export const profilePageReducer = (
  state: ProfilePageType,
  action: ActionsType
) => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostsDataType = {
        id: v1(),
        post: state.profilePage.postMessage,
        likes: 0,
      };
      state.profilePage.initialPostsState.push(newPost);
      state.profilePage.postMessage = "";
      return state;
    case UPDATE_NEW_POST_INPUT:
      state.profilePage.postMessage = action.newPostMessage;
      return state;
    default:
      return state;
  }
};

export const addPostAC = (): AddPostActionType => {
  return {
    type: "ADD-POST",
  };
};
export const updateNewPostInputAC = (
  newPostMessage: string
): UpdateNewPostInputActionType => {
  return {
    type: "UPDATE-NEW-POST-INPUT",
    newPostMessage: newPostMessage,
  };
};
