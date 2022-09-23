import { v1 } from "uuid";
import {
  ADD_POST,
  profilePageReducer,
  UPDATE_NEW_POST_INPUT,
} from "./ProfilePageReducer";
import {
  ADD_MESSAGE,
  dialogsPageReducer,
  UPDATE_DIALOGS_MESSAGE_INPUT,
} from "./DialogsPageReducer";
import { sidebarPageReducer } from "./SidebarPageReducer";

export type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sideBar: Array<FriendsType>;
};
export type StoreType = {
  _state: StateType;
  subscribe: (observer: () => void) => void;
  rerenderEntireTree: () => void;
  setState: (state: StateType) => void;
  getState: () => StateType;
  dispatch: (action: ActionsType) => void;
};
export type ProfilePageType = {
  initialPostsState: Array<PostsDataType>;
  postMessage: string;
};
export type DialogsPageType = {
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<MessagesDataType>;
  dialogsMessage: string;
};
export type FriendsType = {
  id: string;
  friendsName: string;
  friendsAva: string;
};
export type PostsDataType = {
  id: string;
  post: string;
  likes: number;
};
export type DialogsDataType = {
  id: string;
  name: string;
};
export type MessagesDataType = {
  id: string;
  message: string;
};
export type ActionsType =
  | AddPostActionType
  | UpdateNewPostInputActionType
  | AddMessageActionType
  | UpdateNewMessageInputActionType;

export type AddPostActionType = {
  type: typeof ADD_POST;
};
export type AddMessageActionType = {
  type: typeof ADD_MESSAGE;
};
export type UpdateNewPostInputActionType = {
  type: typeof UPDATE_NEW_POST_INPUT;
  newPostMessage: string;
};
export type UpdateNewMessageInputActionType = {
  type: typeof UPDATE_DIALOGS_MESSAGE_INPUT;
  newMessageText: string;
};

export const store: StoreType = {
  _state: {
    profilePage: {
      initialPostsState: [
        { id: v1(), post: "hello", likes: 123 },
        { id: v1(), post: "sup", likes: 14123 },
        { id: v1(), post: "Bye", likes: 23 },
        { id: v1(), post: "Aloha", likes: 13 },
      ],
      postMessage: "",
    },
    dialogsPage: {
      dialogsData: [
        { id: v1(), name: "Michael" },
        { id: v1(), name: "Genya" },
        { id: v1(), name: "Roma" },
        { id: v1(), name: "Denis" },
      ],
      messagesData: [
        { id: v1(), message: "HI" },
        { id: v1(), message: "hello" },
        { id: v1(), message: "sup" },
        { id: v1(), message: "Hi-ho" },
      ],
      dialogsMessage: "",
    },
    sideBar: [
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
    ],
  },
  rerenderEntireTree() {
    console.log("state changed");
  },
  setState(state: StateType) {
    this._state = state;
  },
  getState() {
    return this._state;
  },
  subscribe(observer: () => void) {
    this.rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    );
    this._state.dialogsPage = dialogsPageReducer(
      this._state.dialogsPage,
      action
    );
    this._state.sideBar = sidebarPageReducer(this._state.sideBar, action);

    this.rerenderEntireTree();
  },
};
