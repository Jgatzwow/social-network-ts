import React, {ChangeEvent, useState} from 'react';
import {Post} from './Post/Post';
import styles from './MyPosts.module.css'
import {v1} from 'uuid';
import {PostsDataType} from '../../../redux/State';

type PropsType = {
    initialPostsState: Array<PostsDataType>
}


export const MyPosts = (props: PropsType) => {
    const {initialPostsState} = props

    const [messages, setMessages] = useState<Array<PostsDataType>>(initialPostsState)
    const [onPostChange, setOnPostChange] = useState('')
    const onAddMessage = (value: string) => {
        setMessages([{id: v1(), post: value, likes: 0}, ...messages])
    }
    const onAddMessageHandler = () => {
        onAddMessage(onPostChange)
        setOnPostChange('')
    }
    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setOnPostChange(e.currentTarget.value)
    }

    return (
        <div className={styles.my__post__wrapper}>
            <h3>My posts</h3>
            <div>
                <input onChange={onInputChangeHandler} value={onPostChange}></input>
                <button onClick={onAddMessageHandler} className={styles.button}>add post
                </button>
            </div>
            {messages.map(m => {
                return <Post key={m.id} likes={m.likes} message={m.post}/>
            })}

        </div>
    )
}