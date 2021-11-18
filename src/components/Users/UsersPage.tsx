import React from 'react';
import {useSelector} from "react-redux";
import {Users} from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {getIsFetching,} from "../../redux/usersSelectors";


type UsersPagePropsType = {}

const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)

    return <>
        {isFetching && <Preloader/>}
        <Users/>
    </>
}

export default UsersPage