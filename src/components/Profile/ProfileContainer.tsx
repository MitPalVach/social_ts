import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps, Redirect} from 'react-router-dom';
import {getUserProfile, ProfileUserType} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";


type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    profilePage: ProfileUserType
    isAuth: boolean
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
            userId = '2';
        }
        getUserProfile(+userId)
    })
    if (!props.isAuth) return <Redirect to={'/login'}/>

    return <Profile profilePage={props.profilePage}/>
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, {getUserProfile}
)(WithUrlDataContainerComponent);
