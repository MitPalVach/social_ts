import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'


type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}
const Header: React.FC<PropsType> = (props) => {
    return (
        <header className={styles.header}>
            <a className={styles.header__inner} href={"/profile"}>
                <img className={styles.headerLogo} src='https://img.icons8.com/ios/452/owl.png'
                     alt="logo"/>
            </a>
            <a className={styles.header__inner} href={"/profile"}>
                <h1 className={styles.headerTitle}>owlbook.com</h1>
            </a>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Выйти</button></div>
                    : <NavLink className={styles.loginBlock__btn} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;