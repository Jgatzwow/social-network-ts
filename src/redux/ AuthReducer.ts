import { Dispatch } from "redux";
import { authAPI } from "../api/API";
import { AxiosResponse } from "axios";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export type InitialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export const authReducer = (
  state: InitialStateType = initialState,
  action: AuthActionsType
): InitialStateType => {
  switch (action.type) {
    case "SET-AUTH-USER-DATA": {
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

type AuthActionsType = setAuthUserDataACType;

type setAuthUserDataACType = ReturnType<typeof setAuthUserData>;

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null
) => {
  return {
    type: "SET-AUTH-USER-DATA",
    payload: {
      userId,
      email,
      login,
    },
  } as const;
};

export const getAuthUserData = () => {
  return (dispatch: Dispatch) => {
    authAPI.me().then((response: AxiosResponse) => {
      if (response.data.resultCode === 0) {
        dispatch(
          setAuthUserData(
            response.data.data.id,
            response.data.data.email,
            response.data.data.login
          )
        );
      }
    });
  };
};
