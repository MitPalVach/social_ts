import React from 'react';
import styles from './FriendsOnline.module.css';
import {SidebarType} from "../../../redux/State";
import FriendsAvatar from "./FriendsAvatar/FriendsAvatar";


type PropsType ={
    sidebar: Array<SidebarType>
}
const FriendsOnline:React.FC<PropsType> = (props) => {
    let friendsAvatar = props.sidebar.map(f => <FriendsAvatar
        key={f.id} name={f.name}
        ava={f.ava} id={f.id}
    />);
    return (
        <div className={styles.fOnline}>
            <h5 className={styles.fOnline__title}>Друзья онлайн</h5>
            {friendsAvatar}
        </div>
    );
};

export default FriendsOnline;

