import {combineReducers, createStore} from "redux";
import friendsOnlineReducer from "./friendsOnlineReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsOnline: friendsOnlineReducer
})

export type AppStoreType = ReturnType<typeof reducers>
let store = createStore(reducers)

export default store