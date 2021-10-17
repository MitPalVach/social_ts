import React, {ComponentType} from 'react';
import styles from './App.module.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import UsersContainer from "../Users/UsersContainer";
import News from "../News/News";
import Music from "../Music/Music";
import Photo from "../Photo/Photo";
import Video from "../Video/Video";
import Settings from "../Settings/Settings";
import DialogsContainer from "../Dialogs/DialogsContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import Login from "../Login/Login";
import {connect, Provider} from "react-redux";
import {AppStateType, store} from "../../redux/reduxStore";
import {compose} from "redux";
import {initializeApp} from "../../redux/appReducer";
import Preloader from "../Common/Preloader/Preloader";


type MapDispatchType = {
    initializeApp: () => void
}

interface PropsType extends MapDispatchType {
    initialized: boolean
}

interface StateType {
}

class App extends React.Component<PropsType, StateType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={styles.container}>
                <div className={styles.app__wrapper}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={styles.content__wrapper}>
                        <div className={styles.content__inner}>
                            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                            <Route path={'/users'} render={() => <UsersContainer/>}/>
                            <Route path={'/news'} render={() => <News/>}/>
                            <Route path={'/music'} render={() => <Music/>}/>
                            <Route path={'/photo'} render={() => <Photo/>}/>
                            <Route path={'/video'} render={() => <Video/>}/>
                            <Route path={'/settings'} render={() => <Settings/>}/>
                            <Route path={'/login'} render={() => <Login/>}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mstp = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<ComponentType>(
    withRouter,
    connect(mstp, {initializeApp}))(App)

let SocialApp = (props: StateType) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SocialApp






