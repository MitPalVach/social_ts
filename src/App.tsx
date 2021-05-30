import React from 'react';
import styles from './App.module.css';
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Photo from "./components/Photo/Photo";
import Video from "./components/Video/Video";
import Settings from "./components/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <div className={styles.container}>
                <div className={styles.app__wrapper}>
                    <Header/>
                    <Navbar/>
                    <div className={styles.content__wrapper}>
                        <div className={styles.content__inner}>
                            <Route path={'/profile'} component={Profile}/>
                            <Route path={'/dialogs'} component={Dialogs}/>
                            <Route path={'/friends'} component={Friends}/>
                            <Route path={'/news'} component={News}/>
                            <Route path={'/music'} component={Music}/>
                            <Route path={'/photo'} component={Photo}/>
                            <Route path={'/video'} component={Video}/>
                            <Route path={'/settings'} component={Settings}/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
