import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
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
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const ProfileContainer = (props: PropsType) => {
    useEffect(() => {
        let userId = props.match.params.userId; // string
        if (!userId) {
            userId = '16540';
        }
        getUserProfile(+userId)
        setStatus(userId)
    })
    return <Profile profilePage={props.profilePage}/>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

