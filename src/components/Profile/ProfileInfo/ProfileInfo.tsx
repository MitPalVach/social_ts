import React, {ChangeEvent, useState} from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {userPhoto} from "../../Users/User";
import {ProfileUserType} from "../../../redux/profileReducer";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";


type ProfileInfoType = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    callbackPhoto: (file: any) => void
    isAuth: boolean
}
const ProfileInfo = (props: ProfileInfoType) => {
    const [editMode, setEditMode] = useState(false)

    const goToEditMode = () => {
        setEditMode(true)
    }
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.callbackPhoto(e.target.files[0])
        }
    }
    return (
        props.profile.profile.contacts &&
        <div>
            <div>
                <img className={styles.profileImg}
                     src={props.profile.profile.photos ? props.profile.profile.photos.large : userPhoto}
                     alt='avatar'/>
                <div className={styles.profileImg__inputPhoto_wrapper}>
                    {props.isOwner &&
                    <input className={styles.profileImg__inputPhoto}
                           type={'file'}
                           onChange={onMainPhotoSelected}
                    />}
                </div>
            </div>
            {editMode
                ? <ProfileDataForm profile={props.profile}/>
                : <ProfileData goToEditMode={goToEditMode}
                               profile={props.profile}
                               isOwner={props.isOwner}/>}
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo;