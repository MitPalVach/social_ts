import React from 'react';
import styles from "./Users.module.css";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';
import s from '../App/App.module.css';

export const userPhoto = 'https://images.pexels.com/photos/1564839/pexels-photo-1564839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'


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
                    ? <button className={s.main_btn}
                        disabled={props.followingInProgress.includes(props.user.id)}
                        onClick={() => {
                            props.unfollow(props.user.id)
                        }}>Unfollow</button>
                    : <button className={s.main_btn}
                              disabled={props.followingInProgress.includes(props.user.id)}
                              onClick={() => {
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