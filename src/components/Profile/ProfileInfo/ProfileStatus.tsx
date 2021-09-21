import React, {ChangeEvent, useState} from 'react';
import styles from './ProfileInfo.module.css';

type ProfileStatusType = {
    status: string
    updateStatus: any
}

// ==
class ProfileStatus extends React.Component<ProfileStatusType, any> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode ?
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status || 'no status'}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </>
        )
    }

}

export default ProfileStatus

// ==
// const ProfileStatus = (props: ProfileStatusType) => {
//     const [editMode, setEditMode] = useState<boolean>(false)
//     const [status, setStatus] = useState(props.status)
//     const activateEditMode = () => {
//         setEditMode(true)
//     }
//     const deactivateEditMode = () => {
//         setEditMode(false)
//         props.updateStatus(props.status)
//     }
//     const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setStatus(e.currentTarget.value)
//     }
//     return (
//         <>
//             {!editMode ?
//                 <div>
//                     <span onClick={activateEditMode}>{props.status || 'no status'}</span>
//                 </div>
//                 : <div>
//                     <input onChange={onStatusChange}
//                            autoFocus={true}
//                            onBlur={deactivateEditMode}
//                            value={status}/>
//                 </div>
//             }
//         </>
//     );
// };
//
// export default ProfileStatus;
//
//
//
//
//
//


