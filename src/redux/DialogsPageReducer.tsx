import {v1} from 'uuid';
import {DialogsDataType, MessagesDataType} from './ReduxStore';


const initialState = {
  dialogsData: [
    {id: v1(), name: 'Michael'},
    {id: v1(), name: 'Genya'},
    {id: v1(), name: 'Roma'},
    {id: v1(), name: 'Denis'},
  ] as Array<DialogsDataType>,
  messagesData: [
    {id: v1(), message: 'HI'},
    {id: v1(), message: 'hello'},
    {id: v1(), message: 'sup'},
    {id: v1(), message: 'Hi-ho'},
  ] as Array<MessagesDataType>,
};
export type DialogsInitialStateType = typeof initialState;
export const dialogsPageReducer = (
  state: DialogsInitialStateType = initialState,
  action: DialogsActionTypes
): DialogsInitialStateType => {
  switch (action.type) {
    case 'dialogs/ADD-MESSAGE':
      const newMessage: MessagesDataType = {
        id: v1(),
        message: action.payload.newMessageText,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    default:
      return state;
  }
};

export type DialogsActionTypes = AddMessageActionType;

type AddMessageActionType = ReturnType<typeof addMessageAC>;

export const addMessageAC = (newMessageText: string) => {
  return {
    type: 'dialogs/ADD-MESSAGE',
    payload: {
      newMessageText,
    },
  } as const;
};
