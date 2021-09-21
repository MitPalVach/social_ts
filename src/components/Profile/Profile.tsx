import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../redux/profileReducer";


type PropsType = {
    profilePage: ProfileUserType
}
const Profile: React.FC<PropsType> = ({profilePage}) => {
    return (
        <div>
            <ProfileInfo profile={profilePage.profile}
                         status={profilePage.status}
                         updateStatus={profilePage.updateStatus}/>
            <MyPostsContainer profilePage={profilePage}/>
        </div>
    )
}

export default Profile;