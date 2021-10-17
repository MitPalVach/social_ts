import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "./avatar_to_all.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';


type UserPropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
const User = (props: UserPropsType): JSX.Element => {

    return (
        <div className={styles.usersItems}>
            <NavLink to={'/profile/' + props.user.id}>
                <img className={styles.usersPhoto} alt={'user_photo'}
                     src={props.user.photos.small !== null ? props.user.photos.small : userPhoto}/>
            </NavLink>
            <div>
                {props.user.followed
                    ? <button disabled={props.followingInProgress.includes(props.user.id)} onClick={() => {
                        props.unfollow(props.user.id)
                    }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.includes(props.user.id)} onClick={() => {
                        props.follow(props.user.id)
                    }}>Follow</button>}
            </div>
            <span>
                    <span>
                        <div>{props.user.name}</div>
                        <div>{props.user.status}</div>
                    </span>
                    <span>
                        <div>{"props.location.country"}</div>
                        <div>{"props.location.city"}</div>
                    </span>
                </span>
        </div>
    )
};

export default User;