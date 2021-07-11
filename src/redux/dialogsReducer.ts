import filin from "../images/friends_avatars/filin.jpeg";
import sipuha from "../images/friends_avatars/sipuha.jpeg";
import rybniyFilin from "../images/friends_avatars/rybniy-filin.jpeg";
import {DialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {
    dialogs: [
        {id: 1, name: 'Tom', friendsAvatar: filin},
        {id: 2, name: 'Alex', friendsAvatar: sipuha},
        {id: 3, name: 'Jane', friendsAvatar: rybniyFilin}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Bye'},
    ],
    newMessageBody: ''
}
const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [{id: 6, message: body}, ...state.messages],
                newMessageBody: ''
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
    }
    return state
}

export type ActionsTypes =
    ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBodyAC>

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body
    } as const
}

export default dialogsReducer