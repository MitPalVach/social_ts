import {PostDataType} from "./store";
import {profileApi} from "../api/api";
import {Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./reduxStore";
import {v1} from "uuid";


const ADD_POST = "ADD-POST"
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SET_UPDATE_STATUS = 'SET_UPDATE_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE = 'SAVE_PROFILE'

export type ProfileInfoResponseType = {
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    aboutMe?: string
    contacts?: ContactsType
}
let initialState = {
    postData: [
        {message: 'Hi, how are you?', id: v1(), likeCount: 12},
        {message: 'What do you think about JS?', id: v1(), likeCount: 22},
        {message: 'I learn not only JS but and TS!', id: v1(), likeCount: 42},
        {message: 'Oh, it\'s cool', id: v1(), likeCount: 23}
    ],
    // newPostText: '',
    profile: {
        contacts: {}
    },
    status: '',
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileUserType = {
    profile: {
        userId: number
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: ContactsType
        photos: PhotosType
        aboutMe: string
    }
    postData: Array<PostDataType>
    newPostText: string
    status: string
}
export type ContactsType = {
    // [key: string]: string | null
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
                id: v1(),
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
                // postData: state.postData.filter(p => p.id !== action.postId)
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: {...action.profile}}
        }
        case SET_UPDATE_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        case SAVE_PROFILE: {
            return {...state, profile: {...state.profile, profile: action.profile}}
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
    | savePhotoSuccessAT | saveProfileAT

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
        type: SET_UPDATE_STATUS,
        status
    } as const
}
export const savePhotoSuccess = (photos: PhotosType) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    } as const
}
export const saveProfileSuccess = (profile: ProfileInfoResponseType) => {
    return {
        type: SAVE_PROFILE,
        profile
    } as const
}
export type savePhotoSuccessAT = ReturnType<typeof savePhotoSuccess>
export type saveProfileAT = ReturnType<typeof saveProfileSuccess>


// thunk
export const getUserProfile = (userId: number) => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
    let response = await profileApi.getProfile(userId)
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
export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    let response = await profileApi.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileInfoResponseType) => async (dispatch: Dispatch, getState: () => AppStateType) => {
    const userId = getState().auth.userId
    let response = await profileApi.saveProfile(profile)
    if (response.data.resultCode === 0) {
        // @ts-ignore
        dispatch(getUserProfile(userId))
        dispatch(saveProfileSuccess(response.data.data.profile))
    }
}

export default profileReducer