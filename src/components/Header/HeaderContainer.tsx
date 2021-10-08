import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";


type OwnProps = {}
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchType = {
    getAuthUserData: () => void
    logout: () => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchType

class HeaderContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth}
                       getAuthUserData={this.props.getAuthUserData} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export default connect<MapStateToPropsType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps, {
    getAuthUserData, logout
})(HeaderContainer);
