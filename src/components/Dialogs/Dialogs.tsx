import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import filin from './../../images/friends_avatars/filin.jpeg';
import sipuha from './../../images/friends_avatars/sipuha.jpeg';
import rybniyFilin from './../../images/friends_avatars/rybniy-filin.jpeg';


let dialogs = [
    {id:1, name: 'Tom', friendsAvatar: filin},
    {id:2, name: 'Alex', friendsAvatar: sipuha},
    {id:3, name: 'Jane', friendsAvatar: rybniyFilin}
]

let messages = [
    {id:1, message: 'Hello'},
    {id:2, message: 'Hi'},
    {id:3, message: 'Bye'},
]

const Dialogs = () => {
    let dialogsElements = dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id} friendsAvatar={d.friendsAvatar}/>);
    let messagesElements = messages.map(m =>
        <Message key={m.id} message={m.message} id={m.id}/>);

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