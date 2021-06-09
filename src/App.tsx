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
import {StateType} from "./redux/State";


type PropsType = {
    state: StateType

}
function App (props:PropsType) {
    return (
        <BrowserRouter>
            <div className={styles.container}>
                <div className={styles.app__wrapper}>
                    <Header/>
                    <Navbar sidebar={props.state.friendsOnline.sidebar}/>
                    <div className={styles.content__wrapper}>
                        <div className={styles.content__inner}>
                            <Route path={'/profile'}
                                   render={() => <Profile postData={props.state.profilePage.postData} />}/>
                            <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
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
        </BrowserRouter>
    );
}

export default App;
