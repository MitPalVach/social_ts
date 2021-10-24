import React, {FC} from 'react';
import {ContactsType, ProfileUserType} from "../../../redux/profileReducer";
import styles from "./ProfileInfo.module.css";
import Contact from "./Contact";


let ContactsInitialState: ContactsType = {
    github: '',
    vk: '',
    facebook: '',
    instagram: '',
    twitter: '',
    website: '',
    youtube: '',
    mainLink: '',
}


type PropsType = {
    profile: ProfileUserType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData: FC<PropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={styles.profileInfo__items}>
            {isOwner && <div>
                <button className={styles.profileData__changeBtn} onClick={goToEditMode}>редактировать данные</button>
            </div>}
            <div className={styles.profileInfo__item}>
                <b>Имя: </b> {profile.profile.fullName || ''}
            </div>
            <div className={styles.profileInfo__item}>
                <b>Обо мне: </b> {profile.profile.aboutMe}
            </div>
            <div className={styles.profileInfo__item}>
                <b>Поиск работы: </b> {profile.profile.lookingForAJob ? "да" : "нет"}
            </div>
            <div className={styles.profileInfo__item}>
                <b>Мои профессиональные навыки: </b> {profile.profile.lookingForAJobDescription}
            </div>
            <div className={styles.profileInfo__contacts}>
                {Object.keys(profile.profile.contacts).map(key => {
                    // @ts-ignore
                    return <Contact key={key} contactTitle={key} contactValue={profile.profile.contacts[key]}/>
                })}
            </div>
        </div>
    );
};

export default ProfileData;

