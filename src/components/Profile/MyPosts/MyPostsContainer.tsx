import React from "react";

import {
  addPostAC,
  updateNewPostInputAC,
} from "../../../redux/ProfilePageReducer";
import { StoreType } from "../../../redux/ReduxStore";
import { MyPosts } from "./MyPosts";

type PropsType = {
  store: StoreType;
};

export const MyPostsContainer = (props: PropsType) => {
  const { store } = props;

  const state = store.getState();

  const onAddPostHandler = () => {
    store.dispatch(addPostAC());
  };
  const onPostChangeHandler = (newPostMessage: string) => {
    store.dispatch(updateNewPostInputAC(newPostMessage));
  };

  return (
    <MyPosts
      initialPostsState={state.profilePage.initialPostsState}
      postMessage={state.profilePage.postMessage}
      updateNewPostText={(newPostMessage: string) =>
        onPostChangeHandler(newPostMessage)
      }
      addPost={onAddPostHandler}
    />
  );
};
