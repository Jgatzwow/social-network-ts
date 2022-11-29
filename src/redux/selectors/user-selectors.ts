import { StateType } from "../ReduxStore";
import { createSelector } from "reselect";
import { getUsers } from "../UsersPageReducer";

export const getUsersForMapState = (state: StateType) => {
  return state.usersPage.users;
};
export const getPageSize = (state: StateType) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state: StateType) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state: StateType) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state: StateType) => {
  return state.usersPage.isFetching;
};
export const getFollowingProgress = (state: StateType) => {
  return state.usersPage.followingInProgress;
};

/*export const getUsersSuper = createSelector(getUsers, (users) => {
  return users.filter(u => u);
});*/
