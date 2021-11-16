import {AppStateType} from "./reduxStore";
import {createSelector} from "reselect";
import {UserType} from "./usersReducer";


export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsersSelector = createSelector(getUsers, (users: UserType[]) => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
export const getPortionSize = (state: AppStateType) => {
    return state.usersPage.portionSize
}
export const getUsersFiler = (state: AppStateType) => {
    return state.usersPage.filter
}




