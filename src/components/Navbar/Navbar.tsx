import styles from './Navbar.module.css';
import React from "react";
// import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarItem}>
                <a className={styles.navbarItem__link}
                   href={"/profile"}>
                    Профиль</a>
            </div>
            <div className={styles.navbarItem}>
                <a className={styles.navbarItem__link}
                   href={"/dialogs"} >
                    Сообщения</a>
            </div>
            <div className={styles.navbarItem}>
                <a className={styles.navbarItem__link}
                   href={"/friends"} >
                    Друзья</a>
            </div>
            <div className={styles.navbarItem}>
                <a className={styles.navbarItem__link}
                   href={"/news"} >
                    Новости</a>
            </div>
            <div className={styles.navbarItem}>
                <a className={styles.navbarItem__link}
                   href={"/music"} >
                    Музыка</a>
            </div>
            <div className={styles.navbarItem}>
                <a className={styles.navbarItem__link}
                   href={"/photo"} >
                    Фото</a>
            </div>
            <div className={styles.navbarItem}>
                <a className={styles.navbarItem__link}
                   href={"/video"} >
                    Видео</a>
            </div>
            <div className={styles.navbarItem}>
                <a className={styles.navbarItem__link}
                   href={"/settings"} >
                    Настройки</a>
            </div>
        </nav>
    )
}

export default Navbar;
