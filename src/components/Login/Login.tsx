import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormControls";
import styles from './Login.module.css';
import {required} from "../../utils/validators";
import {connect, useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/reduxStore";
import {useFormik} from "formik";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from "@mui/material";


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
            { props.error && <div className={styles.formSummaryError}>{props.error}</div>}
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

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Логин</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mstp = (state: AppStateType)=> ({
    isAuth: state.auth.isAuth
})
export default connect(mstp, {login})(Login);


// type FormikErrorType = {
//     email?: string
//     password?: string
//     rememberMe?: boolean
// }
//
// export const Login = () => {
//     const dispatch = useDispatch()
//
//     const isLoggedIn = useSelector<AppStateType, boolean>((state) => state.auth.isAuth)
//
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//             rememberMe: false
//         },
//         validate: (values) => {
//             const errors: FormikErrorType = {};
//             if (!values.email) {
//                 errors.email = 'Логин обязателен';
//             } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//                 errors.email = 'Некорректный email';
//             }
//             if (!values.password) {
//                 errors.password = 'Пароль обязателен';
//             } else if (values.password.length < 3) {
//                 errors.password = 'Пароль минимум 3 символа';
//             }
//             return errors;
//         },
//         onSubmit: values => {
//             // alert(JSON.stringify(values));
//             dispatch(login(values))
//             formik.resetForm()
//         },
//     })
//
//     if (isLoggedIn) {
//         return <Redirect from={'/login'} to={'/'}/>
//     }
//
//     return <Grid container justifyContent={'center'}>
//         <Grid item justifyContent={'center'}>
//             <FormControl>
//                 <FormLabel>
//                     <p>To log in get registered
//                         <a href={'https://social-network.samuraijs.com/'}
//                            target={'_blank'}> here
//                         </a>
//                     </p>
//                     <p>or use common test account credentials:</p>
//                     <p>Email: free@samuraijs.com</p>
//                     <p>Password: free</p>
//                 </FormLabel>
//
//                 <form onSubmit={formik.handleSubmit}>
//                     <FormGroup>
//                         <TextField label='email'
//                                    margin="normal"
//                                    type='email'
//                                    {...formik.getFieldProps('email')}
//                         />
//                         {formik.touched.email && formik.errors.email &&
//                         <div style={{color: 'red'}}>{formik.errors.email}</div>}
//
//                         <TextField label='password'
//                                    margin="normal"
//                                    type='password'
//                                    {...formik.getFieldProps('password')}
//                         />
//                         {formik.touched.password && formik.errors.password &&
//                         <div style={{color: 'red'}}>{formik.errors.password}</div>}
//
//                         <FormControlLabel label='Remember me'
//                                           control={<Checkbox/>}
//                                           {...formik.getFieldProps('rememberMe')}
//                                           checked={formik.values.rememberMe}
//                         />
//                         <Button type={'submit'} variant={'contained'} color={'primary'}>
//                             Войти
//                         </Button>
//                     </FormGroup>
//                 </form>
//             </FormControl>
//         </Grid>
//     </Grid>
// }


