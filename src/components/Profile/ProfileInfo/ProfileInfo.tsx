import React, {ChangeEvent} from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {userPhoto} from "../../Users/User";
// import owlEyes from '../../../images/owl_eyes.jpeg';


type PhotosType = {
    photos: {
        small: string
        large: string
    }
}
type ProfileInfoType = {
    profile: PhotosType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}
const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        
    }

    return (
        <div>
            <div>
                <img className={styles.profileImg}
                     src={props.profile.photos.large || userPhoto}
                    // src={owlEyes}
                     alt='owl'/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
            <div className={styles.avatar}>
                {/*{props.profile.photos.large &&*/}
                {/*<img className={styles.avatarImg}*/}
                {/*     src={props.profile.photos.large} alt="avatar"/>}*/}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;