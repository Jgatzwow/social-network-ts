import React from 'react';
import styles from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Messages} from './messages/Messages';
import {DialogsDataType, MessagesDataType} from '../../redux/State';

type PropsType = {
    dialogsPage: {
        dialogsData: Array<DialogsDataType>
        messagesData: Array<MessagesDataType>
    }

}


const Dialogs = (props: PropsType) => {
    const {dialogsPage} = props
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                {dialogsPage.dialogsData.map(d => {
                    return <Dialog key={d.id} name={d.name} id={d.id}/>
                })}

            </div>
            <div className={styles.messages}>
                {dialogsPage.messagesData.map(m => {
                    return <Messages key={m.id} message={m.message}/>

                })}


            </div>
        </div>
    )
}

export default Dialogs