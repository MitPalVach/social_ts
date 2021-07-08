import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ActionsTypes, ProfilePageType} from "../../redux/State";


type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}
const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <MyPosts postData={props.profilePage.postData}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;