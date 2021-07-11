import {ProfilePageType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
    postData: [
        {message: 'Hi, how are you?', id: 1, likeCount: 12},
        {message: 'What do you think about JS?', id: 2, likeCount: 22},
        {message: 'I learn not only JS but and TS!', id: 3, likeCount: 42},
        {message: 'Oh, it\'s cool', id: 4, likeCount: 23}
    ],
    newPostText: 'www.mitpal.ru'
}
const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    let stateCopy = {...state}
    stateCopy.postData = [...state.postData]
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: action.postMessage,
                likeCount: 0
            }
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = ''
            break;
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy.newPostText = action.newText
            break;
        }
    }
    return state
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    } as const
}

export default profileReducer