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
  login: string | null,
  isAuth: boolean
) => {
  return {
    type: "SET-AUTH-USER-DATA",
    payload: {
      userId,
      email,
      login,
      isAuth,
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
            response.data.data.login,
            true
          )
        );
      }
    });
  };
};

export const login = (email: string, password: string, rememberMe: boolean) => {
  return (dispatch: any) => {
    authAPI
      .login(email, password, rememberMe)
      .then((response: AxiosResponse) => {
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData());
        }
      });
  };
};
export const logout = () => {
  return (dispatch: Dispatch) => {
    authAPI.logout().then((response: AxiosResponse) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};
