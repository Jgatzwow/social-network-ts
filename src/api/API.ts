import axios, { AxiosResponse } from "axios";
import { UserProfileType } from "../redux/ProfilePageReducer";
import { AuthDataType } from "../components/header/HeaderAPIContainer";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "api-key": "c3e11594-611c-4916-b709-940cf6a62b5d" },
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  followUser(userId: number) {
    return instance.post(`/follow/${userId}`);
  },
  unfollowUser(userId: number) {
    return instance.delete(`/follow/${userId}`);
  },
};
export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<UserProfileType>(`/profile/${userId}`);
  },
};

export const authAPI = {
  me() {
    return instance.get<AuthDataType>(`/auth/me`);
  },
};
