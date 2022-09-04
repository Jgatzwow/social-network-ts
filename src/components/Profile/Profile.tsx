import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsDataType} from '../../redux/State';

type PropsType = {
    initialPostsState: Array<PostsDataType>
    postMessage: string
    onAddPost: (postMessage: string) => void
}


export const Profile = (props: PropsType) => {
    const {initialPostsState,postMessage,onAddPost} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPosts initialPostsState={initialPostsState}
                     postMessage={postMessage}
                     onAddPost={onAddPost}/>
        </div>
    )
}