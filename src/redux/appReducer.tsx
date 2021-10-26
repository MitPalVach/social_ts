import {getAuthUserData} from "./authReducer";
import {RootDispatchType} from "./reduxStore";

const SUCCESS_INITIALIZED = 'SUCCESS_INITIALIZED';

export type AppInitialStateType = {
    initialized: boolean
}
export type ActionsTypes = ReturnType<typeof successInitialized>

let initialState: AppInitialStateType = {
    initialized: false,
}

const appReducer = (state: AppInitialStateType = initialState, action: ActionsTypes): AppInitialStateType => {
    switch (action.type) {
        case SUCCESS_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}
export const initializeApp = () => (dispatch: RootDispatchType) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(successInitialized())
        })
}
export const successInitialized = () => ({type: SUCCESS_INITIALIZED,} as const)

export default appReducer
