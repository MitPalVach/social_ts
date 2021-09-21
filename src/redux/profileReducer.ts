import {PostDataType} from "./store";
import {profileApi, usersApi} from "../api/api";
import {Dispatch} from "redux";


const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

// let initialState = {
//     postData: [
//         {message: 'Hi, how are you?', id: 1, likeCount: 12},
//         {message: 'What do you think about JS?', id: 2, likeCount: 22},
//         {message: 'I learn not only JS but and TS!', id: 3, likeCount: 42},
//         {message: 'Oh, it\'s cool', id: 4, likeCount: 23}
//     ],
//     // newPostText: 'www.mitpal.ru'
//     newPostText: '',
//     profile: null,
//     status: '',
// }
export type ProfileUserType = {
    profile: {
        userId: number
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: ContactsType
        photos: {
            small: string
            large: string
        },
    }
    postData: Array<PostDataType>
    newPostText: string
    status: any
    updateStatus:() => void
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
const initialState = {
    profile: {
        userId: 2,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },
        photos: {
            small: '',
            large: '',
        }
    },
    postData: [{message: 'Hi, how are you?', id: 1, likeCount: 12},
        {message: 'What do you think about JS?', id: 2, likeCount: 22},
        {message: 'I learn not only JS but and TS!', id: 3, likeCount: 42},
        {message: 'Oh, it\'s cool', id: 4, likeCount: 23}],
    newPostText: '',
    status: '',
}

type InitStateType = typeof initialState

const profileReducer = (state: InitStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
    }
    return state
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

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
export const setUserProfile = (profile: ProfileUserType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        status
    } as const
}
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersApi.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: any) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer