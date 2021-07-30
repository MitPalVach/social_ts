import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {ProfileUserType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";


type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    profilePage: ProfileUserType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileUserType) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const ProfileContainer = (props: PropsType) => {
    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        axios.get<ProfileUserType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            props.setUserProfile(response.data)
        })
    }, [])
    return <Profile profilePage={props.profilePage}/>
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
