import React from 'react';
import {useSelector} from "react-redux";
import {Users} from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {getIsFetching,} from "../../redux/usersSelectors";


type UsersPagePropsType = {}

export const UsersPage: React.FC<UsersPagePropsType> = () => {
    const isFetching = useSelector(getIsFetching)

    return <>
        {isFetching && <Preloader/>}
        <Users/>
    </>
}