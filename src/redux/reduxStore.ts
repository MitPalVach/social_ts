import {combineReducers, createStore} from "redux";
import friendsOnlineReducer from "./friendsOnlineReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsOnline: friendsOnlineReducer
})

export type AppStoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
