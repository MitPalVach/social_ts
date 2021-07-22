import React from "react";
import styles from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import * as axios from 'axios';
import userPhoto from './avatar_to_all.png'


const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        // @ts-ignore
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }
    return <div className={styles.usersInner}>
        {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.usersPhoto} alt={'user_photo'}
                             src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}
                            >Unfollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}
                            >Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
        </div>)}
    </div>

}

export default Users;