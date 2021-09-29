import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import styles from "../Dialogs.module.css";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../Common/FormControls/FormControls";


const maxLength50 = maxLengthCreator(50)
const AddMessageForm: React.FC<InjectedFormProps> = (props) => {
    return (
        <form className={styles.dialogFormWrapper} onSubmit={props.handleSubmit}>
            <div>
                <Field className={styles.dialogMessages__input}
                       component={Textarea}
                       name='newMessageBody'
                       placeholder={'Введите сообщение'}
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button className={styles.dialogMessages__btn}>Написать</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
