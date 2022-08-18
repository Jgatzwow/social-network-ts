import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import styles from "./Profile.module.css"


export const Profile = () => {
    return (
        <div>
            <div className={styles.profile__bg}>
                <img
                    src="https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/beach-sunset-i102003.jpg"
                    alt="bg"/>
            </div>
            <div className={styles.ava__description_wrapper}>
                <div className={styles.profile__pic}>
                    <img
                        src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024"
                        alt=""/>
                </div>
                <div>
                    <h2>My Name</h2>
                    <p>Date of Birth</p>
                    <p>City</p>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
}