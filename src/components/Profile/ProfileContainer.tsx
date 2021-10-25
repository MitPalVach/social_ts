import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect, useDispatch} from "react-redux";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {
    getUserProfile,
    ProfileUserType,
    savePhoto,
    saveProfile,
    setStatus, ProfileInfoResponseType,
    updateStatus
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    profilePage: ProfileUserType
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    // getStatus: () => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileInfoResponseType, userId: number) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const ProfileContainer = (props: PropsType) => {
    const dispatch = useDispatch()
    let userId = +props.match.params.userId;
    if (!userId) {
        userId = props.authorizedUserId || 0;
        // if (!userId) {                               // раскомент
        //     props.history.push('/login')
        // }
    }
    useEffect(() => {
        dispatch(getUserProfile(userId))
        dispatch(setStatus(userId))
    }, [])
    const callbackPhoto = (file: any) => {
        dispatch(savePhoto(file))
    }

    const saveProfile = (profile: ProfileInfoResponseType) => {
        props.saveProfile(profile, userId)
    }

    return (
        <Profile getUserProfile={props.getUserProfile}
            // getStatus={props.getStatus}
                 isOwner={!props.match.params.userId}
                 updateStatus={props.updateStatus}
                 profilePage={props.profilePage}
                 callbackPhoto={callbackPhoto}
                 isAuth={props.isAuth}
                 saveProfile={saveProfile}
        />
    )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}
export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        getUserProfile,
        savePhoto,
        saveProfile,
        // getStatus,
        updateStatus
    }),
    withRouter,
)(ProfileContainer)

