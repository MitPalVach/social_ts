import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {
    // let state = props.dialogsPage;
    // let dialogsElements = state.dialogs.map(d =>
    //     <DialogItem key={d.id} name={d.name} id={d.id} friendsAvatar={d.avatar}/>);
    // let messagesElements = state.messages.map(m =>
    //     <Message key={m.id} message={m.message} id={m.id}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogUsers}>
                {/*{dialogsElements}*/}
            </div>
            <div className={styles.dialogMessages__wrapper}>
                <div className={styles.dialogMessages}>
                    {/*{messagesElements}*/}
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