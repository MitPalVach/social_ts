import React from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


type PhotosType = {
    photos: {
        small: string
        large: string
    }
}
type ProfileInfoType = {
    profile: PhotosType
    status: string
    updateStatus: () => void
}
const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={styles.profileImg}
                     src='https://static.themoscowtimes.com/image/article_1360/68/ScreenShot2021-06-07at43040PM.png'
                     alt='owl'/>
            </div>
            <div className={styles.avatar}>
                <img className={styles.avatarImg}
                     src={props.profile.photos.large} alt="avatar"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;