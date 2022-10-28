const initialState = {
  userId: null,
  email: null,
  login: null,
};

type InitialStateType = typeof initialState;
export const authReducer = (
  state: InitialStateType,
  action: AuthActionsType
): InitialStateType => {
  switch (action.type) {
    case "SET-USER-DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

type AuthActionsType = setUserDataACType;

type setUserDataACType = ReturnType<typeof setUserData>;

export const setUserData = (
  userId: number | null,
  email: string | null,
  login: boolean | null
) => {
  return {
    type: "SET-USER-DATA",
    payload: {
      userId,
      email,
      login,
    },
  } as const;
};
