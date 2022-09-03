import {v1} from 'uuid';

export type StateType = {
    profilePage: {
        initialPostsState: Array<PostsDataType>
    }
    dialogsPage: {
        dialogsData: Array<DialogsDataType>
        messagesData: Array<MessagesDataType>
    }
    sideBar: Array<FriendsType>


}
export type FriendsType = {
    id: string
    friendsName: string
    friendsAva: string
}
export type PostsDataType = {
    id: string
    post: string
    likes: number
}
export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}
export const state: StateType = {
    profilePage: {
        initialPostsState: [
            {id: v1(), post: 'hello', likes: 123},
            {id: v1(), post: 'sup', likes: 14123},
            {id: v1(), post: 'Bye', likes: 23},
            {id: v1(), post: 'Aloha', likes: 13},
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: v1(), name: 'Michael'},
            {id: v1(), name: 'Genya'},
            {id: v1(), name: 'Roma'},
            {id: v1(), name: 'Denis'},
        ],
        messagesData: [
            {id: v1(), message: 'HI'},
            {id: v1(), message: 'hello'},
            {id: v1(), message: 'sup'},
            {id: v1(), message: 'Hi-ho'},
        ]
    },
    sideBar: [
        {
            id: v1(), friendsName: 'Michael',
            friendsAva: 'https://www.slashfilm.com/img/gallery/avatars-mocap-tech-caused-some-literal-headaches-for-the-cast/l-intro-1658883843.jpg'
        },
        {
            id: v1(), friendsName: 'Genya',
            friendsAva: 'https://www.slashfilm.com/img/gallery/avatars-mocap-tech-caused-some-literal-headaches-for-the-cast/l-intro-1658883843.jpg'
        },
        {
            id: v1(), friendsName: 'Denis',
            friendsAva: 'https://www.slashfilm.com/img/gallery/avatars-mocap-tech-caused-some-literal-headaches-for-the-cast/l-intro-1658883843.jpg'
        }
    ]
}



