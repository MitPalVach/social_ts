import styles from './Message.module.css';
import React from "react";
import {MessagesType} from "../../../redux/store";


type MessageTypes = {
    messages: MessagesType
}
const Message: React.FC<MessageTypes> = (props) => {

    return (
        <div>
            <div className={styles.dialogsMessages__item} key={props.messages.id}>
                {props.messages.message}
            </div>
        </div>
    )
}

export default Message;
