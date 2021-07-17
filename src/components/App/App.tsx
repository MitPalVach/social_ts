import React from 'react';
import styles from './App.module.css';
import {Route} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import UsersContainer from "../Users/UsersContainer";
import News from "../News/News";
import Music from "../Music/Music";
import Photo from "../Photo/Photo";
import Video from "../Video/Video";
import Settings from "../Settings/Settings";
import DialogsContainer from "../Dialogs/DialogsContainer";
import ProfileContainer from "../Profile/ProfileContainer";


const App = () => {

    return (
        <div className={styles.container}>
            <div className={styles.app__wrapper}>
                <Header/>
                <Navbar />
                <div className={styles.content__wrapper}>
                    <div className={styles.content__inner}>
                        <Route path={'/profile'} render={() => <ProfileContainer />}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/photo'} render={() => <Photo/>}/>
                        <Route path={'/video'} render={() => <Video/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
