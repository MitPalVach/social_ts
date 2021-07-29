import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "./avatar_to_all.png";
import {UsersPropsType} from "./UsersContainer";


const Users = (props:UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={styles.usersInner}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ""}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                    >{p}</span>
                })}
            </div>
            {props.usersPage.map(u => <div key={u.id}>
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
    );
};

export default Users;