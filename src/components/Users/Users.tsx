import React, {ReactElement} from 'react';
import styles from "./Users.module.css";
import {UserType} from "../../redux/usersReducer";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


type UsersType = {
    usersPage: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isFetching: boolean
    followingInProgress: Array<number>
    portionSize: number
}

// component return jsx or null
// null | string => Nullable<string>

type Nullable<T> = T | null

const Users = (props: UsersType): Nullable<ReactElement> => {
    return (
        <div className={styles.usersInner}>
            <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       portionSize={props.portionSize}
            />

            {props.usersPage.map(u => <User key={u.id}
                                            user={u}
                                            followingInProgress={props.followingInProgress}
                                            follow={props.follow}
                                            unfollow={props.unfollow}
            />)}
        </div>
    );
};

export default Users;