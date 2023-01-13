import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {profilePageReducer} from './ProfilePageReducer';
import {dialogsPageReducer} from './DialogsPageReducer';
import {sidebarPageReducer} from './SidebarPageReducer';
import {usersPageReducer} from './UsersPageReducer';
import {authReducer} from './ AuthReducer';
import thunkMiddleWare from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {appReducer} from './AppReducer';

export type DialogsPageType = {
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<MessagesDataType>;
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

export type StateType = ReturnType<typeof store.getState>;

const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sidebar: sidebarPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));
export type AppDispatch = typeof store.dispatch