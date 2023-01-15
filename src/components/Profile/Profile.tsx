import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { UserProfileType } from "../../redux/ProfilePageReducer";

type PropsType = {
  profile: UserProfileType | null;
  status: string;
  updateStatus: (newStatus: string) => void;
  updatePhoto: (newPhoto: any) => void;
  isOwner: boolean
};

export const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo
        updatePhoto={props.updatePhoto}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
      />
      <MyPostsContainer />
    </div>
  );
};
