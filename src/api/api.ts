import axios from "axios";


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
    unfollow(userId:number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`
        )
    },
    follow(userId:number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`
        )
    },
}