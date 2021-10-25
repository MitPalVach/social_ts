import React, {FC} from 'react';
import styles from "./ProfileInfo.module.css";
import {ProfileInfoResponseType, ProfileUserType} from "../../../redux/profileReducer";
import Contact from "./Contact";
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import FormControlLabel from "@mui/material/FormControlLabel";


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
                github: "",
                vk: "",
                facebook: "",
                Instagram: "",
                twitter: "",
                website: "",
                youtube: "",
                mainLink: ""
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
                    <button type={'submit'}>сохранить</button>
                </div>
                {/*================*/}
                <div className={styles.profileInfo__item}>
                    <TextField label='Имя'
                               margin="normal"
                               type='fullName'
                               {...formik.getFieldProps('fullName')}
                    />
                </div>
                {/*================*/}
                <div className={styles.profileInfo__item}>
                    <TextField label='Обо мне'
                               margin="normal"
                               type='aboutMe'
                               {...formik.getFieldProps('aboutMe')}
                    />
                </div>
                {/*================*/}
                <div className={styles.profileInfo__item}>
                    <TextField label='Мои профессиональные навыки'
                               margin="normal"
                               type='lookingForAJobDescription'
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
                    {Object.entries(profile.profile.contacts).map(([key, value]) => {
                        return <Contact key={key} contactTitle={key} contactValue={value}/>
                    })}
                </div>
            </FormGroup>
        </form>
    );
};

export default ProfileDataForm;


