import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";


type PropsType = {
    profilePage: ProfilePageType
}
const Profile: React.FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer profilePage={props.profilePage}/>
        </div>
    )
}

export default Profile;