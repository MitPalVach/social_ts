import {Dispatch} from "redux";
import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {RootDispatchType} from "./reduxStore";


const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

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
    captchaUrl: string | null
}
// export type InitialStateType = AuthType
export type InitialStateType = typeof initialState
let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null // if null, then captcha is not required
}

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }

}

export type ActionsTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    } as const
}
export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {captchaUrl}
    } as const
}
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authApi.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captchaUrl: string) => async (dispatch: RootDispatchType) => {
    let response = await authApi.login(email, password, rememberMe, captchaUrl) // captcha
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Ошибка ввода'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaUrl = () => async (dispatch: RootDispatchType) => {
    const response = await securityApi.getCaptcha()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer






