import filin from "../images/friends_avatars/filin.jpeg";
import sipuha from "../images/friends_avatars/sipuha.jpeg";
import rybniyFilin from "../images/friends_avatars/rybniy-filin.jpeg";


const SEND_MESSAGE = 'SEND-MESSAGE'

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
    friendsAvatar: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Tom', friendsAvatar: filin},
        {id: 2, name: 'Alex', friendsAvatar: sipuha},
        {id: 3, name: 'Jane', friendsAvatar: rybniyFilin}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Bye'},
    ] as Array<MessagesType>,
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [{id: 6, message: body}, ...state.messages]
            };
    }
    return state
}

export type ActionsTypes =
    ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    } as const
}

export default dialogsReducer