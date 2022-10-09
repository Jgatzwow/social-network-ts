import React from "react";
import styles from "./Post.module.css";

type PropsType = {
  message: string;
  likes: number;
};

export const Post = (props: PropsType) => {
  const { message, likes } = props;
  return (
    <div>
      <div className={styles.post}>
        <div>
          <img
            src="https://www.slashfilm.com/img/gallery/avatars-mocap-tech-caused-some-literal-headaches-for-the-cast/l-intro-1658883843.jpg"
            alt=""
          />
        </div>
        <h4>{message}</h4>
      </div>
      <span>Likes count:</span>
      <span> {likes} </span>
    </div>
  );
};
