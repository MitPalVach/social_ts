import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";


type OwnProps = {}
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    captchaUrl: string | null
}
type MapDispatchType = {
    logout: () => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchType

class HeaderContainer extends React.Component<OwnPropsType> {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        captchaUrl: state.auth.captchaUrl,
    }
}
export default connect<MapStateToPropsType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps, {logout})(HeaderContainer);
