import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { StoreType } from "../../redux/ReduxStore";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

type PropsType = {
  store: StoreType;
};

export const Profile = (props: PropsType) => {
  const { store } = props;

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </div>
  );
};
