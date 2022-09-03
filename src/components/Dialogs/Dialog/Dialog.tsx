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
            <img
                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""/>
            <NavLink to={'/dialogs' + id} className={styles.dialogs__link}>{name}</NavLink>
        </div>
    )
}