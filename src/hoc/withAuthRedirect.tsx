import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";


type mstpType = {
    isAuth: boolean
}
const mstp = (state: AppStateType): mstpType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mstpType) => {
        let {isAuth, ...restProps} = props
        // if (!isAuth) return <Redirect to={'/login'}/>  // раскомент
        return <Component {...restProps as T}/>
    }
    return connect(mstp)(RedirectComponent)
}


