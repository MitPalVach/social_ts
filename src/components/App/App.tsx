import React, {ComponentType, Suspense} from 'react';
import styles from './App.module.css';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import HeaderContainer from "../Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {AppStateType, store} from "../../redux/reduxStore";
import {compose} from "redux";
import {initializeApp} from "../../redux/appReducer";
import Preloader from "../Common/Preloader/Preloader";

const Login = React.lazy(() => import('../Login/Login'));
const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const UsersPage = React.lazy(() => import('../Users/UsersPage'));
const ChatPage = React.lazy(() => import('../../pages/Chat/ChatPage'));
const News = React.lazy(() => import('../News/News'));
const Music = React.lazy(() => import('../Music/Music'));
const Photo = React.lazy(() => import('../Photo/Photo'));
const Video = React.lazy(() => import('../Video/Video'));
const Settings = React.lazy(() => import('../Settings/Settings'));


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
                            <Suspense fallback={<Preloader/>}>
                                <Switch>
                                    <Route path='/login' component={Login}/>
                                    <Route path='/profile/:userId?' component={ProfileContainer}/>
                                    <Route path='/dialogs' component={DialogsContainer}/>
                                    <Route path='/users' component={UsersPage}/>
                                    <Route path='/chat' component={ChatPage}/>
                                    <Route path='/news' component={News}/>
                                    <Route path='/music' component={Music}/>
                                    <Route path='/photo' component={Photo}/>
                                    <Route path='/video' component={Video}/>
                                    <Route path='/settings' component={Settings}/>
                                </Switch>
                            </Suspense>
                            {/*<Redirect from={'*'} to={'/profile'}/>*/}
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
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SocialApp






