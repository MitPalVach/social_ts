import styles from './Navbar.module.css';
import React from 'react';
import {NavLink} from "react-router-dom";
import FriendsOnlineContainer from "./FriendsOnline/FriendsOnlineContainer";


const Navbar:React.FC = () => {

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
                   to={"/users"} >
                    Друзья</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link} activeClassName={styles.active}
                   to={"/chat"} >
                    Чат</NavLink>
            </div>
            {/*<div className={styles.navbarItem} >*/}
            {/*    <NavLink className={styles.navbarItem__link} activeClassName={styles.active}*/}
            {/*       to={"/news"} >*/}
            {/*        Новости</NavLink>*/}
            {/*</div>*/}
            {/*<div className={styles.navbarItem}>*/}
            {/*    <NavLink className={styles.navbarItem__link} activeClassName={styles.active}*/}
            {/*       to={"/music"} >*/}
            {/*        Музыка</NavLink>*/}
            {/*</div>*/}
            {/*<div className={styles.navbarItem}>*/}
            {/*    <NavLink className={styles.navbarItem__link} activeClassName={styles.active}*/}
            {/*       to={"/photo"} >*/}
            {/*        Фото</NavLink>*/}
            {/*</div>*/}
            {/*<div className={styles.navbarItem}>*/}
            {/*    <NavLink className={styles.navbarItem__link} activeClassName={styles.active}*/}
            {/*       to={"/video"} >*/}
            {/*        Видео</NavLink>*/}
            {/*</div>*/}
            {/*<div className={styles.navbarItem}>*/}
            {/*    <NavLink className={styles.navbarItem__link} activeClassName={styles.active}*/}
            {/*       to={"/settings"} >*/}
            {/*        Настройки</NavLink>*/}
            {/*</div>*/}
            <div className={styles.friendsOnline}>

                <FriendsOnlineContainer />
            </div>
        </nav>
    )
}

export default Navbar;
