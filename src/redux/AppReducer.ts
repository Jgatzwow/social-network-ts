import { Dispatch } from "redux";
import { getAuthUserData } from "./ AuthReducer";

const initialState = {
  initialized: false,
};

export type InitialStateType = {
  initialized: boolean;
};

export const appReducer = (
  state: InitialStateType = initialState,
  action: AuthActionsType
): InitialStateType => {
  switch (action.type) {
    case "SET-INITIALIZED": {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

type AuthActionsType = initializeSuccessACType;

type initializeSuccessACType = ReturnType<typeof initializeSuccess>;

export const initializeSuccess = () => {
  return {
    type: "SET-INITIALIZED",
  } as const;
};

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initializeSuccess());
  });
};
