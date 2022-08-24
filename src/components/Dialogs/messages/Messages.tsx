import React from 'react';
import styles from '../Dialogs.module.css';

type PropsType = {
    message: string
}


export const Messages = (props: PropsType) => {
    const {message} = props
    return (
        <div>
            <div className={styles.message}>{message}</div>
        </div>
    )
}