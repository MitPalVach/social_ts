import React from 'react';
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
}
const Users = (props: UsersType): JSX.Element => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.usersInner}>
            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
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