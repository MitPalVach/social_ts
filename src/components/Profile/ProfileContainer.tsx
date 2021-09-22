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
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const ProfileContainer = (props: PropsType) => {
    const dispatch = useDispatch()
    useEffect(() => {
        let userId = props.match.params.userId; // string
        if (!userId) {
            userId = '16540';
        }
        dispatch(getUserProfile(+userId))
        dispatch(setStatus(userId))
    }, [])
    return <Profile getUserProfile={props.getUserProfile}
                    getStatus={props.getStatus}
                    updateStatus={props.updateStatus}
                    profilePage={props.profilePage}/>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
    }
}
export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

