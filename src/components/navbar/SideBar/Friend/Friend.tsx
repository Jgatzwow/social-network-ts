import React from 'react';
import styles from './friends.module.css'


type PropsType = {
    friendsName: string
    friendsAva: string
}


export const Friend = (props: PropsType) => {
    const {friendsName, friendsAva} = props
    return (
        <div className={styles.friends__wrapper}>
            <div>
                <img src={friendsAva}
                     alt="profile pic"/>
            </div>
            <h4>{friendsName}</h4>

        </div>
    )
} 