import React from "react";
import {RootStateType} from "../../redux/store";
import {connect} from "react-redux";
import Profile from "./Profile";


let mapStateToProps = (state:RootStateType) => {
    return {
        profilePage: state.profilePage
    }
}

const ProfileContainer:React.FC = connect(mapStateToProps)(Profile)

export default ProfileContainer;