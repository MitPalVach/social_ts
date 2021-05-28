import React from "react";
import styles from './Header.module.css'


const Header = () => {
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
                {/*{props.isAuth ? props.login : <NavLink*/}
                {/*    className={styles.loginBlock__btn} to={'/login'}>Log in</NavLink>}*/}
            </div>
        </header>
    )
}

export default Header;