import React, {FC} from 'react';
import styles from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../redux/profileReducer";
import Contact from "./Contact";


type PropsType = {
    profile: ProfileUserType
}
const ProfileDataForm: FC<PropsType> = ({profile}) => {
    return (
        <form>
            <div>
                <button className={styles.profileData__changeBtn} onClick={() => {
                }}>сохранить
                </button>
            </div>
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
        </form>
    );
};

export default ProfileDataForm;

