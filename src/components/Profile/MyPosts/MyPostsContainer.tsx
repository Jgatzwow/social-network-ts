import React from "react";

import {
  addPostAC,
  updateNewPostInputAC,
} from "../../../redux/ProfilePageReducer";
import { PostsDataType, StateType } from "../../../redux/ReduxStore";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { Dispatch } from "redux";

type MapStateToPropsType = {
  initialPostsState: PostsDataType[];
  postMessage: string;
};
type MapDispatchToPropsType = {
  updateNewPostText: (newPostMessage: string) => void;
  addPost: () => void;
};
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    initialPostsState: state.profilePage.initialPostsState,
    postMessage: state.profilePage.postMessage,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    updateNewPostText: (newPostMessage: string) => {
      dispatch(updateNewPostInputAC(newPostMessage));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
