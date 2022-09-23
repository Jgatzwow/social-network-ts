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
            src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
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