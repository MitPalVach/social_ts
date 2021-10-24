import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './ProfileInfo.module.css';


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={styles.statusText}>
            {!editMode && <div>
                <b>Статус: </b> <span onDoubleClick={activeMode}>
                    {status || 'no status'}
                </span></div>}
            {editMode &&
            <input onChange={onStatusChange}
                   onBlur={deactivateEditMode}
                   autoFocus={true}
                   value={status}
            />}
        </div>
    )
}


export default ProfileStatus