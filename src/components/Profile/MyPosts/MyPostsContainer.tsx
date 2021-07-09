import React from "react";
import {ActionsTypes, PostDataType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


type PropsType = {
    postData: PostDataType[]
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

const MyPostsContainer: React.FC<PropsType> = (props) => {
      let addPost = () => {
        // let text = newPostElement.current?.value
        props.dispatch(addPostAC(props.newPostText))
    }
    let onPostChange = (text:string) => {
        // let text = newPostElement.current?.value
        // props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text || ''})
        let action = updateNewPostTextAC(text)
        props.dispatch(action)
    }

    return (
        <MyPosts newPostText={props.newPostText}
            updateNewPostText={onPostChange}
                 addPost={addPost}
                 postData={props.postData}/>
    )
}

export default MyPostsContainer;