import {
  ActionsType,
  AddMessageActionType,
  DialogsPageType,
  MessagesDataType,
  StateType,
  UpdateNewMessageInputActionType,
} from "./store";
import { v1 } from "uuid";

export const ADD_MESSAGE = "ADD-MESSAGE";
export const UPDATE_DIALOGS_MESSAGE_INPUT = "UPDATE-DIALOGS-MESSAGE-INPUT";

export const dialogsPageReducer = (
  state: DialogsPageType,
  action: ActionsType
) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: MessagesDataType = {
        id: v1(),
        message: state.dialogsPage.dialogsMessage,
      };
      state.dialogsPage.messagesData.push(newMessage);
      state.dialogsPage.dialogsMessage = "";
      return state;
    case UPDATE_DIALOGS_MESSAGE_INPUT:
      state.dialogsPage.dialogsMessage = action.newMessageText;
      return state;
    default:
      return state;
  }
};

export const addMessageAC = (): AddMessageActionType => {
  return {
    type: "ADD-MESSAGE",
  };
};
export const updateNewMessageInputAC = (
  newText: string
): UpdateNewMessageInputActionType => {
  return {
    type: "UPDATE-DIALOGS-MESSAGE-INPUT",
    newMessageText: newText,
  };
};
