import axios from "axios";
import {follow, unfollow} from "../redux/usersReducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '411482a7-ac02-48c2-a201-383524308513'},
})
export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}


// export const getFollow = (id: number) => {
//     return instance.get(`follow/${id}`).then(response => {
//         if (response.data.resultCode === 0)
//             unfollow(id)
//     })
// }
// export const getUnfollow = (id: number) => {
//     return instance.get(`follow/${id}`).then(response => {
//         if (response.data.resultCode === 0)
//             follow(id)
//     })
// }
