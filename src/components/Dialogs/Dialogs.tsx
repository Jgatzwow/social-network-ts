import React, { useRef } from "react";
import styles from "./Dialogs.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Messages } from "./messages/Messages";

import { Navigate, Outlet } from "react-router-dom";
import { DialogsPropsType } from "./DialogsContainer";

const Dialogs = (props: DialogsPropsType) => {
  const { dialogsPage, onNewMessageInputChange, onAddMessage, isAuth } = props;

  const dialogsInputRef = useRef<HTMLInputElement>(null);

  const onAddMessageHandler = () => {
    onAddMessage();
  };
  const onNewMessageInputChangeHandler = () => {
    let newText = dialogsInputRef.current ? dialogsInputRef.current.value : "";
    onNewMessageInputChange(newText);
  };
  if (!isAuth) return <Navigate to={"/Login"} />;
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
