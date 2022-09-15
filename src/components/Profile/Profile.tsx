import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, PostsDataType} from '../../redux/State';

type PropsType = {
    initialPostsState: Array<PostsDataType>
    postMessage: string
    dispatch: (action: ActionsType) => void

}


export const Profile = (props: PropsType) => {
    const {initialPostsState,postMessage,dispatch} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPosts initialPostsState={initialPostsState}
                     postMessage={postMessage}
                     dispatch={dispatch}
                     />
        </div>
    )
}