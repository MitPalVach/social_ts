import {PostDataType} from "./store";
import {profileApi, usersApi} from "../api/api";
import {Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./reduxStore";


const ADD_POST = "ADD-POST"
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SET_UPDATE_STATUS = 'SET_UPDATE_STATUS'

let initialState = {
    postData: [
        {message: 'Hi, how are you?', id: 1, likeCount: 12},
        {message: 'What do you think about JS?', id: 2, likeCount: 22},
        {message: 'I learn not only JS but and TS!', id: 3, likeCount: 42},
        {message: 'Oh, it\'s cool', id: 4, likeCount: 23}
    ],
    // newPostText: '',
    profile: null,
    status: '',
}
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
    status: string
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

type InitStateType = typeof initialState

const profileReducer = (state: InitStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
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
        case SET_UPDATE_STATUS: {
            return {...state, status: action.status}
        }
    }
    return state
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setUpdateStatus>
    | ReturnType<typeof deletePost>

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}
export const deletePost = (postId: number) => {
    return {
        type: DELETE_POST,
        postId
    } as const
}
export const setUserProfile = (profile: ProfileUserType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setStatus = (status: number) => {
    return {
        type: SET_USER_STATUS,
        status
    } as const
}
export const setUpdateStatus = (status: string) => {
    return {
        type: 'SET_UPDATE_STATUS',
        status
    } as const
}
export const getUserProfile = (userId: number) => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
    let response = await usersApi.getProfile(userId)
    dispatch(setUserProfile(response.data))
    await dispatch(getStatus(userId))
}
export const getStatus = (userId: number) => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
    let response = await profileApi.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUpdateStatus(status))
    }
}

export default profileReducer