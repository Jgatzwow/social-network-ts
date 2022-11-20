import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { UserProfileType } from "../../redux/ProfilePageReducer";

type PropsType = {
  profile: UserProfileType | null;
  status: string;
  updateStatus: (newStatus: string) => void;
};

export const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};
