import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsDataType} from '../../redux/State';

type PropsType = {
    initialPostsState: Array<PostsDataType>
}


export const Profile = (props: PropsType) => {
    const {initialPostsState} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPosts initialPostsState={initialPostsState}/>
        </div>
    )
}