import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormControls";
import styles from './Login.module.css';
import {required} from "../../utils/validators";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.loginFormWrapper}>
            <div>
                <Field placeholder={'Логин'}
                       name={'login'}
                       component={Input}
                       validate={required}/>
            </div>
            <div>
                <Field placeholder={'Пароль'}
                       name={'password'}
                       component={Input}
                       validate={required}/>
            </div>
            <div>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={'input'}/> Запомнить
            </div>
            <div>
                <button className={styles.loginBtn}>Login</button>
            </div>
        </form>
    );
};


const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    }
    return (
        <div>
            <h1>Логин</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;