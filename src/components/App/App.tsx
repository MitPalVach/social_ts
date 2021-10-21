import React, {ComponentType, Suspense} from 'react';
import styles from './App.module.css';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import News from "../News/News";
import Music from "../Music/Music";
import Photo from "../Photo/Photo";
import Video from "../Video/Video";
import Settings from "../Settings/Settings";
import HeaderContainer from "../Header/HeaderContainer";
import Login from "../Login/Login";
import {connect, Provider} from "react-redux";
import {AppStateType, store} from "../../redux/reduxStore";
import {compose} from "redux";
import {initializeApp} from "../../redux/appReducer";
import Preloader from "../Common/Preloader/Preloader";
// import ProfileContainer from "../Profile/ProfileContainer";
// import DialogsContainer from "../Dialogs/DialogsContainer";
// import UsersContainer from "../Users/UsersContainer";
const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('../Users/UsersContainer'));


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
                            {/*<Switch>*/}
                            {/*    <Route exact path={'/profile/:userId?'} component={() => {*/}
                            {/*        return <React.Suspense fallback={<Preloader/>}>*/}
                            {/*            <ProfileContainer/>*/}
                            {/*        </React.Suspense>*/}
                            {/*    }}/>*/}
                            {/*    <Route path={'/dialogs'} component={() => {*/}
                            {/*        return <React.Suspense fallback={<Preloader/>}>*/}
                            {/*            <DialogsContainer/>*/}
                            {/*        </React.Suspense>*/}
                            {/*    }}/>*/}
                            {/*    <Route path={'/users'} component={() => {*/}
                            {/*        return <React.Suspense fallback={<Preloader/>}>*/}
                            {/*            <UsersContainer/>*/}
                            {/*        </React.Suspense>*/}
                            {/*    }}/>*/}
                            <Suspense fallback={<Preloader/>}>
                                <Switch>
                                    <Route path='/profile/:userId?' component={ProfileContainer}/>
                                    <Route path='/dialogs' component={DialogsContainer}/>
                                    <Route path='/users' component={UsersContainer}/>
                                </Switch>
                            </Suspense>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/photo' render={() => <Photo/>}/>
                            <Route path='/video' render={() => <Video/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            {/*</Switch>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mstp = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<ComponentType>(
    withRouter,
    connect(mstp, {initializeApp}))(App)

let SocialApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SocialApp






