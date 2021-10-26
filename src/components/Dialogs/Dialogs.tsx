import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


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
        values.newMessageBody = ''
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
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;