import React, { useRef } from "react";
import { Post } from "./Post/Post";
import styles from "./MyPosts.module.css";
import { ActionsType, PostsDataType } from "../../../redux/store";
import {
  addPostAC,
  updateNewPostInputAC,
} from "../../../redux/ProfilePageReducer";

type PropsType = {
  initialPostsState: Array<PostsDataType>;
  postMessage: string;
  dispatch: (action: ActionsType) => void;
};

export const MyPosts = (props: PropsType) => {
  const { initialPostsState, postMessage, dispatch } = props;

  const newPostInput = useRef<HTMLInputElement>(null);

  const onAddPostHandler = () => {
    dispatch(addPostAC());
  };
  const onPostChangeHandler = () => {
    let newPostMessage = newPostInput.current
      ? newPostInput.current.value
      : "-------";
    dispatch(updateNewPostInputAC(newPostMessage));
  };

  return (
    <div className={styles.my__post__wrapper}>
      <h3>My posts</h3>
      <div>
        <input
          ref={newPostInput}
          onChange={onPostChangeHandler}
          value={postMessage}
        ></input>
        <button onClick={onAddPostHandler} className={styles.button}>
          add post
        </button>
      </div>
      {initialPostsState.map((m) => {
        return <Post key={m.id} likes={m.likes} message={m.post} />;
      })}
    </div>
  );
};
