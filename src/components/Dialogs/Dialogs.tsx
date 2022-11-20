import React, { useRef } from "react";
import styles from "./Dialogs.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Messages } from "./messages/Messages";

import { Outlet } from "react-router-dom";
import { DialogsPropsType } from "./DialogsContainer";
import { ReduxDialogsForm } from "./DialogsForm";

const Dialogs = (props: DialogsPropsType) => {
  const { dialogsPage, onAddMessage } = props;

  const onAddMessageHandler = (values: any) => {
    onAddMessage(values.newMessage);
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
      <ReduxDialogsForm onSubmit={onAddMessageHandler} />
      <Outlet />
    </div>
  );
};

export default Dialogs;
