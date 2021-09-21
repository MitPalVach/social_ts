import axios from "axios";
import {ProfileUserType} from "../redux/profileReducer";
import {AuthPropsType} from "../redux/authReducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '411482a7-ac02-48c2-a201-383524308513'},
})

export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`
        )
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`
        )
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileApi object')
        return profileApi.getProfile(userId)
    },
}


// ====


export const profileApi = {
    getProfile(userId: number) {
        return instance.get<ProfileUserType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
}


// ====


export const authApi = {
    me() {
        return instance.get<AuthPropsType>(`auth/me`)
    }
}