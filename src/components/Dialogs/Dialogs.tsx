import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/State";


type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
const Dialogs:React.FC<PropsType> = (props) => {
    let dialogsElements = props.dialogs.map(d =>
        // <DialogItem key={d.id} name={d.name} id={d.id} friendsAvatar={d.friendsAvatar}/>);
        <DialogItem dialogs={d}/>);
    let messagesElements = props.messages.map(m =>
        <Message messages={m}/>);

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
                              placeholder='Введите сообщение...'/>
                    <button className={styles.dialogMessages__btn}>
                        Написать
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;