import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";


type OwnProps = {}
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchType = {
    getAuthUserData: () => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchType

class HeaderContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export default connect<MapStateToPropsType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps, {getAuthUserData})(HeaderContainer);
