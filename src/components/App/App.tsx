import React, {ComponentType, Suspense} from 'react';
import styles from './App.module.css';
import {BrowserRouter, HashRouter, Route, Switch, withRouter} from 'react-router-dom';
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
// import DialogsContainer from "../Dialogs/DialogsContainer";
// import ProfileContainer from "../Profile/ProfileContainer";
// import UsersContainer from "../Users/UsersContainer";
const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));
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
                            <Suspense fallback={<Preloader/>}>
                                <Switch>
                                    {/*<Route path={'/dialogs'} render={() =>DialogsContainer}/>*/}
                                    <Route path={'/dialogs'} component={DialogsContainer}/>
                                    <Route path={'/profile/:userId?'} component={ProfileContainer}/>
                                    <Route path={'/users'} component={UsersContainer}/>
                                    <Route path={'/news'} render={() => <News/>}/>
                                    <Route path={'/music'} render={() => <Music/>}/>
                                    <Route path={'/photo'} render={() => <Photo/>}/>
                                    <Route path={'/video'} render={() => <Video/>}/>
                                    <Route path={'/settings'} render={() => <Settings/>}/>
                                    <Route path={'/login'} render={() => <Login/>}/>
                                </Switch>
                            </Suspense>
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

let SocialApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default SocialApp






