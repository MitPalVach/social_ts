import {v1} from "uuid";

const tom = 'https://images.pexels.com/photos/3622695/pexels-photo-3622695.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
const alex = 'https://images.pexels.com/photos/3732453/pexels-photo-3732453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
const jane = 'https://images.pexels.com/photos/6474755/pexels-photo-6474755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'


const SEND_MESSAGE = 'SEND-MESSAGE'

export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
    friendsAvatar: string
}

let initialState = {
    dialogs: [
        {id: v1(), name: 'Tom', friendsAvatar: tom},
        {id: v1(), name: 'Alex', friendsAvatar: alex},
        {id: v1(), name: 'Jane', friendsAvatar: jane}
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Bye'},
    ] as Array<MessagesType>,
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [{id: v1(), message: action.newMessageBody}, ...state.messages]
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