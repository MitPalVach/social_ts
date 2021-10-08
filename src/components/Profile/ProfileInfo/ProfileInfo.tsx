import React from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import owlEyes from '../../../images/owl_eyes.jpeg';


type PhotosType = {
    photos: {
        small: string
        large: string
    }
}
type ProfileInfoType = {
    profile: PhotosType
    status: string
    updateStatus: (status:string) => void
}
const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={styles.profileImg}
                     src={owlEyes}
                     alt='owl'/>
            </div>
            <div className={styles.avatar}>
                <img className={styles.avatarImg}
                     src={props.profile.photos.large} alt="avatar"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;