import React, {ReactElement, useEffect} from 'react';
import styles from "./Users.module.css";
import {FilterType, follow, requestUsers, unfollow} from "../../redux/usersReducer";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage, getFollowingInProgress, getPageSize, getPortionSize,
    getTotalUsersCount, getUsersFiler, getUsers
} from "../../redux/usersSelectors";
import {useHistory} from "react-router-dom";
import * as queryString from "querystring";


type UsersType = {}
// component return jsx or null
// null | string => Nullable<string>
type Nullable<T> = T | null

export const Users = (props: UsersType): Nullable<ReactElement> => {
    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFiler)
    const portionSize = useSelector(getPortionSize)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as { term: string; page: string; friend: string }
        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch (parsed.friend) {
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break
            case 'true':
                actualFilter = {...actualFilter, friend: true}
                break
            case 'false':
                actualFilter = {...actualFilter, friend: false}
                break
        }
        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        history.push({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const atFollow = (userId: number) => dispatch(follow(userId))
    const atUnfollow = (userId: number) => dispatch(unfollow(userId))

    return (
        <div className={styles.usersInner}>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       portionSize={portionSize}
            />

            {users.map(u => <User key={u.id}
                                  user={u}
                                  followingInProgress={followingInProgress}
                                  follow={atFollow}
                                  unfollow={atUnfollow}
            />)}
        </div>
    );
};