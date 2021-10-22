import React, {ChangeEvent, useEffect} from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {userPhoto} from "../../Users/User";
import {ProfileUserType} from "../../../redux/profileReducer";
// import owlEyes from '../../../images/owl_eyes.jpeg';


type ProfileInfoType = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    callbackPhoto: (file: any) => void
}
const ProfileInfo = (props: ProfileInfoType) => {

    useEffect(() => {
        console.log(props.profile.profile);
    }, [])
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
                    // src={owlEyes}
                     alt='avatar'/>
                <div className={styles.profileImg__inputPhoto_wrapper}>
                    {props.isOwner &&
                    <input className={styles.profileImg__inputPhoto}
                           type={'file'}
                           onChange={onMainPhotoSelected}
                    />}
                </div>
            </div>
            <div className={styles.profileInfo__items}>
                <div className={styles.profileInfo__item}>
                    <b>Имя: </b> {props.profile.profile.fullName || ''}
                </div>
                <div className={styles.profileInfo__item}>
                    <b>Поиск работы:</b> {props.profile.profile.lookingForAJob ? "в поиске" : "работаю"}
                </div>
                <div className={styles.profileInfo__item}>
                    <b>Описание работы:</b> {props.profile.profile.lookingForAJobDescription || 'отсутствует'}
                </div>

                <div className={styles.profileInfo__item}>
                    <b>GitHub:</b> {props.profile.profile.contacts?.github || 'отсутствует'}
                </div>
                <div className={styles.profileInfo__item}>
                    <b>Website:</b> {props.profile.profile.contacts?.website || 'отсутствует'}
                </div>
                <div className={styles.profileInfo__item}>
                    <b>Facebook:</b> {props.profile.profile.contacts?.facebook || 'отсутствует'}
                </div>
                <div className={styles.profileInfo__item}>
                    <b>Instagram: </b> {props.profile.profile.contacts?.instagram || 'отсутствует'}
                </div>
                <div className={styles.profileInfo__item}>
                    <b>VK:</b> {props.profile.profile.contacts?.vk || 'отсутствует'}
                </div>
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