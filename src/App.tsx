import React from 'react';
import styles from './App.module.css';
import {Route} from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Photo from "./components/Photo/Photo";
import Video from "./components/Video/Video";
import Settings from "./components/Settings/Settings";
import {ActionsTypes} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type PropsType = {
    store: any
    dispatch: (action: ActionsTypes) => void

}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()

    return (
        <div className={styles.container}>
            <div className={styles.app__wrapper}>
                <Header/>
                <Navbar friendsOnline={state.friendsOnline}/>
                <div className={styles.content__wrapper}>
                    <div className={styles.content__inner}>
                        <Route path={'/profile'} render={() => <Profile store={props.store}/>}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}/>}/>
                        <Route path={'/friends'} render={() => <Friends/>}/>
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
