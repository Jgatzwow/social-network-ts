import {Dispatch} from 'redux';
import {authAPI} from '../api/API';
import {AxiosResponse} from 'axios';
import {stopSubmit} from 'redux-form';

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
    case 'auth/SET-AUTH-USER-DATA': {
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
    type: 'auth/SET-AUTH-USER-DATA',
    payload: {
      userId,
      email,
      login,
      isAuth,
    },
  } as const;
};

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    try {
      const response: AxiosResponse = await authAPI.me()
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
    } catch (e) {
      console.warn(e)
    }

  }
;

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
  try {
    const response: AxiosResponse = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : 'some error';
      dispatch(
        stopSubmit('login', {
          _error: message,
        })
      );
    }
  } catch (e) {
    console.warn(e)
  }

};
export const logout = () => async (dispatch: Dispatch) => {
  try {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  } catch (e) {
    console.warn(e)
  }

};
