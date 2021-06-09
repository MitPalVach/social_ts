import styles from './Navbar.module.css';
import React from 'react';
import {NavLink} from "react-router-dom";
import FriendsOnline from "./FriendsOnline/FriendsOnline";
import {SidebarType} from "../../redux/State";


type PropsType ={
    sidebar: Array<SidebarType>
}
const Navbar:React.FC<PropsType> = (props) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link} activeClassName={styles.active}
                   to={"/profile"}>
                    Профиль</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link} activeClassName={styles.active}
                   to={"/dialogs"} >
                    Сообщения</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link} activeClassName={styles.active}
                   to={"/friends"} >
                    Друзья</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link} activeClassName={styles.active}
                   to={"/news"} >
                    Новости</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link} activeClassName={styles.active}
                   to={"/music"} >
                    Музыка</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link} activeClassName={styles.active}
                   to={"/photo"} >
                    Фото</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link} activeClassName={styles.active}
                   to={"/video"} >
                    Видео</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link} activeClassName={styles.active}
                   to={"/settings"} >
                    Настройки</NavLink>
            </div>
            <div className={styles.friendsOnline}>
                <FriendsOnline sidebar={props.sidebar}/>
            </div>
        </nav>
    )
}

export default Navbar;
