import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/State";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";


type PropsType = {
    dialogsPage: DialogsPageType
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
}
const Dialogs: React.FC<PropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem dialogs={d}/>);
    let messagesElements = props.dialogsPage.messages.map(m =>
        <Message messages={m}/>);
    let newMessageBody = props.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogUsers}>
                {dialogsElements}
            </div>
            <div className={styles.dialogMessages__wrapper}>
                <div className={styles.dialogMessages}>
                    {messagesElements}
                </div>
                <div className={styles.dialogMessages__inner}>
                    <textarea className={styles.dialogMessages__input}
                              placeholder='Введите сообщение...'
                              value={newMessageBody}
                              onChange={onNewMessageChange}/>
                    <button className={styles.dialogMessages__btn}
                            onClick={onSendMessageClick}
                    >
                        Написать
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;