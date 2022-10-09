import { v1 } from "uuid";
import { DialogsDataType, MessagesDataType } from "./ReduxStore";

export const ADD_MESSAGE = "ADD-MESSAGE";
export const UPDATE_DIALOGS_MESSAGE_INPUT = "UPDATE-DIALOGS-MESSAGE-INPUT";

const initialState = {
  dialogsData: [
    { id: v1(), name: "Michael" },
    { id: v1(), name: "Genya" },
    { id: v1(), name: "Roma" },
    { id: v1(), name: "Denis" },
  ] as Array<DialogsDataType>,
  messagesData: [
    { id: v1(), message: "HI" },
    { id: v1(), message: "hello" },
    { id: v1(), message: "sup" },
    { id: v1(), message: "Hi-ho" },
  ] as Array<MessagesDataType>,
  dialogsMessage: "",
};
type InitialStateType = typeof initialState;
export const dialogsPageReducer = (
  state: InitialStateType = initialState,
  action: DialogsActionTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: MessagesDataType = {
        id: v1(),
        message: state.dialogsMessage,
      };
      state.messagesData.push(newMessage);
      state.dialogsMessage = "";
      return state;
    case UPDATE_DIALOGS_MESSAGE_INPUT:
      state.dialogsMessage = action.payload.newMessageText;
      return state;
    default:
      return state;
  }
};

export type DialogsActionTypes =
  | AddMessageActionType
  | UpdateNewMessageInputActionType;

type AddMessageActionType = ReturnType<typeof addMessageAC>;
type UpdateNewMessageInputActionType = ReturnType<
  typeof updateNewMessageInputAC
>;

export const addMessageAC = () => {
  return {
    type: "ADD-MESSAGE",
  } as const;
};
export const updateNewMessageInputAC = (newText: string) => {
  return {
    type: "UPDATE-DIALOGS-MESSAGE-INPUT",
    payload: {
      newMessageText: newText,
    },
  } as const;
};
