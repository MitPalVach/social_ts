import React from 'react';
import {connect} from "react-redux";
import FriendsOnline from "./FriendsOnline";
import {RootStateType} from "../../../redux/store";


let mapStateToProps = (state:RootStateType) => {
    return {
        friendsOnline: state.friendsOnline
    }
}

const FriendsOnlineContainer: React.FC = connect(mapStateToProps)(FriendsOnline)

export default FriendsOnlineContainer;

