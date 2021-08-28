import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";



export type PropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}
const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} dialogs={d}/>);
    let messagesElements = state.messages.map(m => <Message key={m.id} messages={m}/>);
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }
    const handleKeyDown = (e:KeyboardEvent<HTMLElement>) => {
        if (e.ctrlKey && e.key === 'Enter')
            onSendMessageClick()
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
                <div className={styles.dialogMessages__inner}>
                    <textarea className={styles.dialogMessages__input}
                              placeholder='Введите сообщение...'
                              value={newMessageBody}
                              onChange={onNewMessageChange}
                    onKeyPress={handleKeyDown}
                    />
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