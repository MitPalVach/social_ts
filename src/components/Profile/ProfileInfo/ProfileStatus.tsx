import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';


type ProfileStatusType = {
    status: string
}
const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }


    return (
        <>
            {!editMode ?
                <div>
                    <span onClick={activateEditMode} >{props.status}</span>
                </div>
                : <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} value={props.status}/>
                </div>
            }
        </>
    );
};

export default ProfileStatus;