import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import styles from '../Profile.module.css'
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../Common/FormControls/FormControls";


const maxLength50 = maxLengthCreator(50)
const AddPostForm: React.FC<InjectedFormProps> = (props) => {
    return (
        <form className={styles.profileFormWrapper} onSubmit={props.handleSubmit}>
            <div>
                <Field className={styles.profileMessages__input}
                       component={Textarea}
                       name='newPostText'
                       placeholder={'Введите сообщение'}
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button className={styles.profileMessages__btn}>Написать</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'profileAddPostForm'})(AddPostForm)
