import React from "react";
import {
  addMessageAC,
  updateNewMessageInputAC,
} from "../../redux/DialogsPageReducer";
import { StoreType } from "../../redux/ReduxStore";
import Dialogs from "./Dialogs";

type PropsType = {
  store: StoreType;
};
const DialogsContainer = (props: PropsType) => {
  const { store } = props;

  const state = store.getState();
  const onAddMessageHandler = () => {
    store.dispatch(addMessageAC());
  };
  const onNewMessageInputChangeHandler = (newText: string) => {
    store.dispatch(updateNewMessageInputAC(newText));
  };
  return (
    <Dialogs
      dialogsPage={state.dialogsPage}
      onNewMessageInputChange={(newText) =>
        onNewMessageInputChangeHandler(newText)
      }
      onAddMessage={onAddMessageHandler}
    />
  );
};

export default DialogsContainer;
