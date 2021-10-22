import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../redux/profileReducer";


type PropsType = {
    profilePage: ProfileUserType
    getUserProfile: (userId: number) => void
    // getStatus: () => void
    updateStatus: (status: string) => void
    isOwner: boolean
}
const Profile: React.FC<PropsType> = ({profilePage, updateStatus, ...props}) => {
    return (
        <div>
            <ProfileInfo profile={profilePage.profile}
                         status={profilePage.status}
                         isOwner={props.isOwner}
                         updateStatus={updateStatus}
            />
            <MyPostsContainer profilePage={profilePage}/>
        </div>
    )
}

export default Profile;