import React, {useState} from 'react';
import {Post} from './Post/Post';
import styles from './MyPosts.module.css'
import {PostsDataType} from '../../../redux/State';

type PropsType = {
    initialPostsState: Array<PostsDataType>
    postMessage: string
    onAddPost: (postMessage: string) => void
}


export const MyPosts = (props: PropsType) => {
    const {initialPostsState,postMessage, onAddPost} = props


    const [onPostChange, setOnPostChange] = useState('')

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOnPostChange(e.currentTarget.value)
    }

    const onAddPostHandler = () => {
        onAddPost(onPostChange)
        setOnPostChange('')
    }

    return (
        <div className={styles.my__post__wrapper}>
            <h3>My posts</h3>
            <div>
                <input onChange={onInputChangeHandler} value={onPostChange}></input>
                <button onClick={onAddPostHandler} className={styles.button}>add post
                </button>
            </div>
            {initialPostsState.map(m => {
                return <Post key={m.id} likes={m.likes} message={m.post}/>
            })}

        </div>
    )
}