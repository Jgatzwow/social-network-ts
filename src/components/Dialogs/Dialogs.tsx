import React from 'react';
import styles from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Messages} from './messages/Messages';

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                <Dialog name={'Michael'} id={'1'}/>
                <Dialog name={'Genya'} id={'2'}/>
                <Dialog name={'Michael'} id={'3'}/>
                <Dialog name={'Genya2'} id={'4'}/>


            </div>
            <div className={styles.messages}>
                <Messages message={'HI'}/>
                <Messages message={'hello'}/>
                <Messages message={'sup'}/>
                <Messages message={'H'}/>
            </div>
        </div>
    )
}

export default Dialogs