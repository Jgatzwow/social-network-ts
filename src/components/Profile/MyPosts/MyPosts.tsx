import React from "react";
import { Post } from "./Post/Post";
import styles from "./MyPosts.module.css";
import { MyPostsPropsType } from "./MyPostsContainer";
import { ReduxAddNewPostForm } from "./AddNewPostForm";

export const MyPosts = (props: MyPostsPropsType) => {
  const { initialPostsState, addPost } = props;

  const onAddPostHandler = (values: any) => {
    addPost(values.newPostText);
  };

  return (
    <div className={styles.my__post__wrapper}>
      <h3>My posts</h3>
      <ReduxAddNewPostForm onSubmit={onAddPostHandler} />
      {initialPostsState.map((m) => {
        return <Post key={m.id} likes={m.likes} message={m.post} />;
      })}
    </div>
  );
};
