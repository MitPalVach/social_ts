import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";


type PropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    newMessageBody: (body:string)=> void
}
const Dialogs: React.FC<PropsType> = (props) => {
let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d =>
        <DialogItem dialogs={d}/>);
    let messagesElements = state.messages.map(m =>
        <Message messages={m}/>);
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e:any) => {
        let body = e.target.value
        props.newMessageBody(body)
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