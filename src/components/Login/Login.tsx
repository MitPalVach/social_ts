import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormControls";
import styles from './Login.module.css';
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/reduxStore";


type LoginPropsType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.loginFormWrapper}>
            <div>
                <Field aria-label='Email'
                       placeholder='Email'
                       type='Email'
                       name='email'
                       component={Input}
                       validate={required}/>
            </div>
            <div>
                <Field aria-label='Password'
                       placeholder='Пароль'
                       type='password'
                       name='password'
                       component={Input}
                       validate={required}/>
            </div>
            <div>
                <Field type='checkbox'
                       name='rememberMe'
                       component={'input'}/> Запомнить
            </div>
            {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
            <div>
                <button className={styles.loginBtn}>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    // if (props.isAuth) {
    //     return <Redirect to={'/profile'}/>
    // }

    return (
        <div>
            <h1>Логин</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mstp = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mstp, {login})(Login);
