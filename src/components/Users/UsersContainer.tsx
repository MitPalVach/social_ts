import React from 'react';
import {connect} from "react-redux";
import {
    follow, onPageChanged, setCurrentPage, setTotalUsersCount, setUsers,
    toggleIsFetching, unfollow, UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/reduxStore";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


type MapStatePropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


class UsersContainer extends React.Component<UsersPropsType, UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    // onPageChanged = (pageNumber: number) => {
    //     this.props.toggleIsFetching(true);
    //     this.props.setCurrentPage(pageNumber)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
    //         this.props.toggleIsFetching(false)
    //         this.props.setUsers(response.data.items)
    //     })
    // }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                // onPageChanged={this.onPageChanged}
                   onPageChanged={this.props.onPageChanged}
                   usersPage={this.props.usersPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, onPageChanged, toggleIsFetching
})(UsersContainer);
