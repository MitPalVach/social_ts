import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type PropsType = {
    dialogsPage: DialogsPageType
    sendMessage: (newMessageBody: string) => void
}
const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} dialogs={d}/>);
    let messagesElements = state.messages.map(m => <Message key={m.id} messages={m}/>);

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogUsers}>
                {dialogsElements}
            </div>
            <div className={styles.dialogMessages__wrapper}>
                <h4 className={styles.dir__title}> Dialogs </h4>
                <div className={styles.dialogMessages}>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps> = (props) => {

    return (
        <form className={styles.dialogMessages__inner} onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name='newMessageBody' placeholder={'Введите сообщение'}/>
            </div>
            <div>
                <button className={styles.dialogMessages__btn}>Написать</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;