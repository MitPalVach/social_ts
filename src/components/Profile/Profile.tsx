import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../redux/State";


type PropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    updateNewPost: (newText: string) => void
}
const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <MyPosts postData={props.profilePage.postData}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPost={props.updateNewPost}
            />
        </div>
    )
}

export default Profile;