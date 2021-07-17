import React from "react";
import styles from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";


const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://mitpal.ru/icons/react.svg",
                followed: true,
                fullName: 'Tom',
                status: 'Open to work',
                location: {city: 'Kazan', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: "https://mitpal.ru/icons/react.svg",
                followed: true,
                fullName: 'Ann',
                status: 'Open to work',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: "https://mitpal.ru/icons/react.svg",
                followed: false,
                fullName: 'Bob',
                status: 'In work',
                location: {city: 'Kazan', country: 'Russia'}
            }
        ])
    }
    return <div className={styles.usersInner}>
        {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.usersPhoto} alt={'user_photo'}
                             src={u.photoUrl}/>
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
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
        </div>)}
    </div>

}

export default Users;