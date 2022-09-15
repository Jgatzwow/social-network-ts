import {v1} from 'uuid';


export type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    rerenderEntireTree: () => void
    setState: (state: StateType) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}
export type StateType = {
    profilePage: {
        initialPostsState: Array<PostsDataType>
        postMessage: string
    }
    dialogsPage: {
        dialogsData: Array<DialogsDataType>
        messagesData: Array<MessagesDataType>
        dialogsMessage: string
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
export type ActionsType = AddPostActionType
    | UpdateNewPostInputActionType
    | AddMessageActionType
    | UpdateNewMessageInputActionType

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
export type UpdateNewPostInputActionType = {
    type: 'UPDATE-NEW-POST-INPUT'
    newPostMessage: string
}
export type UpdateNewMessageInputActionType = {
    type: 'UPDATE-DIALOGS-DIALOG-INPUT'
    newMessageText: string
}

export const store: StoreType = {
    _state: {
        profilePage: {
            initialPostsState: [
                {id: v1(), post: 'hello', likes: 123},
                {id: v1(), post: 'sup', likes: 14123},
                {id: v1(), post: 'Bye', likes: 23},
                {id: v1(), post: 'Aloha', likes: 13},
            ],
            postMessage: ''
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
            ],
            dialogsMessage: 'samurai'
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
    },
    rerenderEntireTree() {
        console.log('state changed')
    },
    setState(state: StateType) {
        this._state = state
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this.rerenderEntireTree = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsDataType = {id: v1(), post: this._state.profilePage.postMessage, likes: 0}
            this._state.profilePage.initialPostsState.push(newPost)
            this._state.profilePage.postMessage = ''
            this.rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST-INPUT') {
            this._state.profilePage.postMessage = action.newPostMessage
            this.rerenderEntireTree()
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessagesDataType = {id: v1(), message: this._state.dialogsPage.dialogsMessage}
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.dialogsMessage = ''
            this.rerenderEntireTree()
        } else if (action.type === 'UPDATE-DIALOGS-DIALOG-INPUT') {
            this._state.dialogsPage.dialogsMessage = action.newMessageText
            this.rerenderEntireTree()
        }
    }
}