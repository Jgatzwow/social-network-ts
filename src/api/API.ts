import axios from "axios";
import { UserProfileType } from "../redux/ProfilePageReducer";
import { AuthDataType } from "../components/header/HeaderContainer";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
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
  getStatus(userId: number) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateStatus(newStatus: string) {
    return instance.put(`/profile/status`, { status: newStatus });
  },
  updatePhoto(photo: File) {
    const formData = new FormData()
    formData.append('image', photo)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
};

export const authAPI = {
  me() {
    return instance.get<AuthDataType>(`/auth/me`);
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance.post("/auth/login", { email, password, rememberMe });
  },
  logout() {
    return instance.delete("/auth/login");
  },
};
