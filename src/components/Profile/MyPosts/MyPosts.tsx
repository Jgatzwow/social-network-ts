import React, { useRef } from "react";
import { Post } from "./Post/Post";
import styles from "./MyPosts.module.css";
import { MyPostsPropsType } from "./MyPostsContainer";

export const MyPosts = (props: MyPostsPropsType) => {
  const { initialPostsState, postMessage, updateNewPostText, addPost } = props;

  const newPostInput = useRef<HTMLInputElement>(null);

  const onAddPostHandler = () => {
    addPost();
  };
  const onPostChangeHandler = () => {
    let newPostMessage = newPostInput.current
      ? newPostInput.current.value
      : "-------";
    updateNewPostText(newPostMessage);
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
