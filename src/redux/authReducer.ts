import {Dispatch} from "redux";
import {authApi} from "../api/api";

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
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}

export type ActionsTypes = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    } as const
}
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authApi.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export default authReducer