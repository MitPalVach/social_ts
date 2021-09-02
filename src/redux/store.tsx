import {addPostAC, updateNewPostTextAC} from "./profileReducer";
import {sendMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";
import {AuthType} from "./authReducer";

type PhotosType = {
    photos: {
        small: string
        large: string
    }
}
type LocationType = {
    city: string
    country: string
}
type UsersPageType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
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
    photos: PhotosType
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type FriendsOnlineType = {
    sidebar: Array<SidebarType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    friendsOnline: FriendsOnlineType
    usersPage: UsersPageType
    auth: AuthType
}
export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBodyAC>

// =======

// let store: StoreType = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {message: 'Hi, how are you?', id: 1, likeCount: 12},
//                 {message: 'What do you think about JS?', id: 2, likeCount: 22},
//                 {message: 'I learn not only JS but and TS!', id: 3, likeCount: 42},
//                 {message: 'Oh, it\'s cool', id: 4, likeCount: 23}
//             ],
//             newPostText: 'www.mitpal.ru'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Tom', friendsAvatar: filin},
//                 {id: 2, name: 'Alex', friendsAvatar: sipuha},
//                 {id: 3, name: 'Jane', friendsAvatar: rybniyFilin}
//             ],
//             messages: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'Hi'},
//                 {id: 3, message: 'Bye'},
//             ],
//             newMessageBody: ''
//         },
//         friendsOnline: {
//             sidebar: [
//                 {id: 1, name: 'Неясыть', ava: ava1},
//                 {id: 2, name: 'Филин', ava: ava2},
//                 {id: 3, name: 'Полярная сова', ava: ava3}
//             ]
//         }
//     },
//     _onChange() {
//         console.log('state changed')
//     },
//     subscribe(callback) {
//         this._onChange = callback
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action:ActionsTypes) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.friendsOnline = friendsOnlineReducer(this._state.friendsOnline, action)
//         this._onChange()
//     }
// }

// export default store;