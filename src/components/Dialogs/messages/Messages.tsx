import React from 'react';
import styles from '../Dialogs.module.css';

type PropsType = {
    message: string
}


export const Messages = (props: PropsType) => {
    const {message} = props
    return (
        <div className={styles.message}>
            <div className={styles.message__item}>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>
                </div>
                <div className={styles.message}>{message}</div>
            </div>
            <div className={styles.message__item}>
                <div className={styles.message}>{message}</div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>
                </div>
            </div>
        </div>
    )
}