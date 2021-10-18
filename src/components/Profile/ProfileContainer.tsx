import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect, useDispatch} from "react-redux";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {getStatus, getUserProfile, ProfileUserType, setStatus, updateStatus} from "../../redux/profileReducer";
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
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const ProfileContainer = (props: PropsType) => {
    const dispatch = useDispatch()

    useEffect(() => {
        let userId = +props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId || 0;
            // if (!userId) {                               // раскомент
            //     props.history.push('/login')
            // }
        }
        dispatch(getUserProfile(userId))
        dispatch(setStatus(userId))
    }, [])
    return <Profile getUserProfile={props.getUserProfile}
                    // getStatus={props.getStatus}
                    updateStatus={props.updateStatus}
                    profilePage={props.profilePage}/>
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
        // getStatus,
        updateStatus
    }),
    withRouter,
)(ProfileContainer)

