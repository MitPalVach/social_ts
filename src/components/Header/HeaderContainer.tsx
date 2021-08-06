import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthPropsType, setAuthUserData} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";


type OwnProps = {}
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchType


class HeaderContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        axios.get<AuthPropsType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
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
export default connect<MapStateToPropsType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps, {setAuthUserData})(HeaderContainer);
