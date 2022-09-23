import React, { useRef } from "react";
import styles from "./Dialogs.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Messages } from "./messages/Messages";
import {
  ActionsType,
  DialogsDataType,
  MessagesDataType,
} from "../../redux/store";
import { Outlet } from "react-router-dom";
import {
  addMessageAC,
  updateNewMessageInputAC,
} from "../../redux/DialogsPageReducer";

type PropsType = {
  dialogsPage: {
    dialogsData: Array<DialogsDataType>;
    messagesData: Array<MessagesDataType>;
    dialogsMessage: string;
  };
  dispatch: (action: ActionsType) => void;
};
const Dialogs = (props: PropsType) => {
  const { dialogsPage, dispatch } = props;

  const dialogsInputRef = useRef<HTMLInputElement>(null);

  const onAddMessageHandler = () => {
    dispatch(addMessageAC());
  };
  const onNewMessageInputChangeHandler = () => {
    let newText = dialogsInputRef.current ? dialogsInputRef.current.value : "";
    dispatch(updateNewMessageInputAC(newText));
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        {dialogsPage.dialogsData.map((d) => {
          return <Dialog key={d.id} name={d.name} id={d.id} />;
        })}
      </div>
      <div className={styles.messages}>
        {dialogsPage.messagesData.map((m) => {
          return <Messages key={m.id} message={m.message} />;
        })}
      </div>
      <div>
        <input
          onChange={onNewMessageInputChangeHandler}
          ref={dialogsInputRef}
          value={dialogsPage.dialogsMessage}
        />
        <button onClick={onAddMessageHandler}>Add Message</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Dialogs;
