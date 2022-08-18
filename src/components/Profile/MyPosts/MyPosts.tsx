import React from "react";
import {Post} from "./Post/Post";
import styles from "./MyPosts.module.css"


export const MyPosts = () => {
    return (
        <div className={styles.my__post__wrapper}>
            <h3>My posts</h3>
            <div>
                <textarea value={"your post"}></textarea>
                <button className={styles.button}>send</button>
            </div>
            <Post likes={243} message={"hello"}/>
            <Post likes={22453} message={"bye"}/>
            <Post likes={25543} message={"test"}/>
            <Post likes={255643} message={"Yo"}/>
            <Post likes={24631323} message={"MessagePost"}/>
        </div>
    )
}