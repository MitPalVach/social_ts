import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {RootDispatchType} from "./reduxStore";


const SET_USER_DATA = 'SET_USER_DATA';

export type AuthPropsType = {
    resultCode: number
    messages: Array<string>
    data: {
        id: number
        email: string
        login: string
    }
}
export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type InitialStateType = AuthType

let initialState = {
    userId: null as number | null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export type ActionsTypes = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    } as const
}
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }})
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: RootDispatchType) => {
    authApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Ошибка ввода'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}
export const logout = () => (dispatch: Dispatch) => {
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer






