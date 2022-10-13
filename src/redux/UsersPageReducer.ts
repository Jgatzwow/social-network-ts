type UsersType = {
  users: UserType[];
};

export type UserType = {
  id: string;
  profilePic: string;
  name: string;
  followed: boolean;
  status: string;
  location: LocationType;
};
export type LocationType = {
  city: string;
  country: string;
};
const initialState = {
  users: [],
};
export const usersPageReducer = (
  state: InitialStateType = initialState,
  action: UsersPageActionTypes
): InitialStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userId ? { ...u, followed: true } : u
        ),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userId ? { ...u, followed: false } : u
        ),
      };
    case "SET-USERS":
      return { ...state, users: [...state.users, ...action.payload.users] };
    default:
      return state;
  }
};
type InitialStateType = typeof initialState | UsersType;
export type UsersPageActionTypes =
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType;

type FollowActionType = ReturnType<typeof followAC>;
type UnfollowActionType = ReturnType<typeof unfollowAC>;
type SetUsersActionType = ReturnType<typeof setUsersAC>;

export const followAC = (userId: string) => {
  return {
    type: "FOLLOW",
    payload: {
      userId,
    },
  } as const;
};
export const unfollowAC = (userId: string) => {
  return {
    type: "UNFOLLOW",
    payload: {
      userId,
    },
  } as const;
};
export const setUsersAC = (users: UserType[]) => {
  return {
    type: "SET-USERS",
    payload: {
      users,
    },
  } as const;
};