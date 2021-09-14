import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {getUserProfile, ProfileUserType} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
            userId = '2';
        }
        getUserProfile(+userId)
    })
    return <Profile profilePage={props.profilePage}/>
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
    }
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default withAuthRedirect(connect(mapStateToProps, {getUserProfile}
)(WithUrlDataContainerComponent));
