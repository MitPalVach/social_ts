import filin from "../images/friends_avatars/filin.jpeg";
import sipuha from "../images/friends_avatars/sipuha.jpeg";
import rybniyFilin from "../images/friends_avatars/rybniy-filin.jpeg";
import ava1 from '../images/ava_1.png';
import ava2 from '../images/ava_2.png';
import ava3 from '../images/ava_3.png';


const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
    friendsAvatar: string
}
export type PostDataType = {
    message: string
    id: number
    likeCount: number
}
export type SidebarType = {
    id: number
    name: string
    ava: string
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type FriendsOnline = {
    sidebar: Array<SidebarType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    friendsOnline: FriendsOnline
}
export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

// ======
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
export const addPostAC = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    } as const
}
// =======

let store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {message: 'Hi, how are you?', id: 1, likeCount: 12},
                {message: 'What do you think about JS?', id: 2, likeCount: 22},
                {message: 'I learn not only JS but and TS!', id: 3, likeCount: 42},
                {message: 'Oh, it\'s cool', id: 4, likeCount: 23}
            ],
            newPostText: 'www.mitpal.ru'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Tom', friendsAvatar: filin},
                {id: 2, name: 'Alex', friendsAvatar: sipuha},
                {id: 3, name: 'Jane', friendsAvatar: rybniyFilin}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'Bye'},
            ]
        },
        friendsOnline: {
            sidebar: [
                {id: 1, name: 'Неясыть', ava: ava1},
                {id: 2, name: 'Филин', ava: ava2},
                {id: 3, name: 'Полярная сова', ava: ava3}
            ]
        }
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                message: action.postMessage,
                likeCount: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChange()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        }
    }
}

export default store;