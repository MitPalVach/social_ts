import React from "react";
import {ActionsTypes, RootStateType} from "../../../redux/store";
import {addPostAC, ProfileUserType, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


type PropsType = {
    profilePage:ProfileUserType
}

let mapStateToProps = (state: RootStateType) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostAC(newPostText))
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer: React.FC<PropsType> = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;