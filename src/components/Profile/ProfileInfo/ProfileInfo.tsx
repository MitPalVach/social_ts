import React from "react";
import styles from './ProfileInfo.module.css';
import owlEyes from '../../../images/owl_eyes.jpeg';
import Preloader from "../../Common/Preloader/Preloader";

type PhotosType = {
    photos: {
        small: string
        large: string
    }
}
type ProfileInfoType = {
    profile: PhotosType
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
            </div>
        </div>
    )
}

export default ProfileInfo;