import {Action, AnyAction, applyMiddleware, combineReducers, createStore, Dispatch} from "redux";
import friendsOnlineReducer from "./friendsOnlineReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsOnline: friendsOnlineReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type RootDispatchType = Dispatch<Action<string>> & ThunkDispatch<AppStateType, string, AnyAction>;

//@ts-ignore
window.store = store
