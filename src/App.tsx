import React from 'react';
import styles from './App.module.css';
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";


function App() {
    return (
        <div className={styles.container}>
            <div className={styles.app__wrapper}>
                <Header/>
                <Navbar/>
                <div className={styles.content__wrapper}>
                    <div className={styles.content__inner}>
                        <Profile/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
