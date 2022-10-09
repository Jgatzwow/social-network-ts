import { v1 } from "uuid";
import { FriendsType } from "./ReduxStore";

const initialState = [
  {
    id: v1(),
    friendsName: "Michael",
    friendsAva:
      "https://www.slashfilm.com/img/gallery/avatars-mocap-tech-caused-some-literal-headaches-for-the-cast/l-intro-1658883843.jpg",
  },
  {
    id: v1(),
    friendsName: "Genya",
    friendsAva:
      "https://www.slashfilm.com/img/gallery/avatars-mocap-tech-caused-some-literal-headaches-for-the-cast/l-intro-1658883843.jpg",
  },
  {
    id: v1(),
    friendsName: "Denis",
    friendsAva:
      "https://www.slashfilm.com/img/gallery/avatars-mocap-tech-caused-some-literal-headaches-for-the-cast/l-intro-1658883843.jpg",
  },
] as Array<FriendsType>;

type InitialStateType = typeof initialState;
export const sidebarPageReducer = (
  state: InitialStateType = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
