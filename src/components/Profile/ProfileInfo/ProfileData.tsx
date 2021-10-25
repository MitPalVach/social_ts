import React, {FC} from 'react';
import {ProfileUserType} from "../../../redux/profileReducer";
import styles from "./ProfileInfo.module.css";
import Contact from "./Contact";


type PropsType = {
    profile: ProfileUserType
    goToEditMode: () => void
    isAuth: boolean
}
const ProfileData: FC<PropsType> = ({profile, isAuth, goToEditMode}) => {
    return (
        <div className={styles.profileInfo__items}>
            {isAuth && <div>
                <button className={styles.profileData__changeBtn} onClick={goToEditMode}>редактировать данные</button>
            </div>}
            <div className={styles.profileInfo__item}>
                <b>Имя: </b> {profile.profile.fullName}
            </div>
            <div className={styles.profileInfo__item}>
                <b>Обо мне: </b> {profile.profile.aboutMe}
            </div>
            <div className={styles.profileInfo__item}>
                <b>Поиск работы: </b> {profile.profile.lookingForAJob ? 'да' : 'нет'}
            </div>
            <div className={styles.profileInfo__item}>
                <b>Мои профессиональные навыки: </b> {profile.profile.lookingForAJobDescription}
            </div>
            <div className={styles.profileInfo__contacts}>
                {Object.entries(profile.profile.contacts).map(([key, value]) => {
                    return <Contact key={key} contactTitle={key} contactValue={value}/>
                })}
            </div>
        </div>
    );
};

export default ProfileData;

