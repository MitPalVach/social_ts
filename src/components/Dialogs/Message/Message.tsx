import styles from './Message.module.css';
import React from "react";


type MessageTypes = {
    message: string
    id: number
}
const Message = (props: MessageTypes) => {

    return (
        <div>
            <div className={styles.dialogsMessages__item} key={props.id}>
                {props.message}
            </div>
        </div>
    )
}

export default Message;
