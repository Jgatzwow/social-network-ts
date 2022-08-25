import React, {ChangeEvent, useState} from 'react';
import {Post} from './Post/Post';
import styles from './MyPosts.module.css'

type InitialStateType = Array<MessagesType>
type MessagesType = {
    id: number
    post: string
    likes: number
}

const initialState = [
    {id: 1, post: 'hello', likes: 123},
    {id: 2, post: 'sup', likes: 14123},
    {id: 3, post: 'Bye', likes: 23},
    {id: 4, post: 'Aloha', likes: 13},
]


export const MyPosts = () => {

    const [messages, setMessages] = useState<InitialStateType>(initialState)
    const [onPostChange, setOnPostChange] = useState('')
    const onAddMessage = (value: string) => {
        setMessages([{id: 5, post: value, likes: 0}, ...messages])
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