import React from 'react';
import styles from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {
    name: string
    id: string
}


export const Dialog = (props: PropsType) => {
    const {id, name} = props
    return (
        <div className={styles.dialog}>
            <NavLink to={'/dialogs' + id} className={styles.dialogs__link}>{name}</NavLink>
        </div>
    )
}