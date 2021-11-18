import React, {FC} from 'react';
import styles from "./ProfileInfo.module.css";
import {ProfileInfoResponseType, ProfileUserType} from "../../../redux/profileReducer";
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import {useFormik} from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import s from "../../App/App.module.css";


type PropsType = {
    profile: ProfileUserType
    saveProfile: (profile: ProfileInfoResponseType) => void
    goToViewMode: () => void
}
const ProfileDataForm: FC<PropsType> = ({profile, saveProfile, goToViewMode}) => {
    const formik = useFormik({
        initialValues: {
            lookingForAJob: profile.profile.lookingForAJob,
            lookingForAJobDescription: profile.profile.lookingForAJobDescription,
            fullName: profile.profile.fullName,
            contacts: {
                github: profile.profile.contacts.github,
                vk: profile.profile.contacts.vk,
                facebook: profile.profile.contacts.facebook,
                instagram: profile.profile.contacts.instagram,
                twitter: profile.profile.contacts.twitter,
                website: profile.profile.contacts.website,
                youtube: profile.profile.contacts.youtube,
                mainLink: profile.profile.contacts.mainLink
            },
            aboutMe: profile.profile.aboutMe,
            userId: profile.profile.userId,
            photos: {small: '', large: ''},
        },
        onSubmit: (values: ProfileInfoResponseType) => {
            saveProfile(values)
            goToViewMode()
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <div>
                    <button className={s.main_btn} type={'submit'}>сохранить</button>
                </div>
                {/*================*/}
                <div className={styles.profileInfo__item}>
                    <TextField label='Имя'
                               margin="normal"
                               {...formik.getFieldProps('fullName')}
                    />
                </div>
                {/*================*/}
                <div className={styles.profileInfo__item}>
                    <TextField label='Обо мне'
                               margin="normal"
                               {...formik.getFieldProps('aboutMe')}
                    />
                </div>
                {/*================*/}
                <div className={styles.profileInfo__item}>
                    <TextField label='Мои профессиональные навыки'
                               margin="normal"
                               {...formik.getFieldProps('lookingForAJobDescription')}
                    />
                </div>
                {/*================*/}
                <div className={styles.profileInfo__item}>
                    <b>Поиск работы: </b>
                    <FormControlLabel label=''
                                      control={<Checkbox/>}
                                      {...formik.getFieldProps('lookingForAJob')}
                                      checked={formik.values.lookingForAJob}
                    />
                </div>
                {/*================*/}
                <div className={styles.profileInfo__contacts}>
                    {Object.entries(profile.profile.contacts).map((item) => {
                        // return <Contact key={key} contactTitle={key} contactValue={value}/>
                        return <div key={item[0]} className={styles.profileInfo__contact}>
                            <TextField key={item[0]}
                                       label={item}
                                       margin="normal"
                                       {...formik.getFieldProps(`contacts.${item[0]}`)}
                            />
                        </div>
                    })}
                </div>
            </FormGroup>
        </form>
    );
};

export default ProfileDataForm;


