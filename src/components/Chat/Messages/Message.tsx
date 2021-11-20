import React from 'react';
import {ChatMessageType} from "../../../pages/Chat/ChatPage";
import s from '../../App/App.module.css';


const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return (
        <div className={s.chat__item}>
            <img className={s.user__itemLink_img} src={message.photo} alt="avatar" />
            <span className={s.chat__name}>{message.userName}</span>
            <div className={s.chat__message}>
                {message.message}
            </div>
        </div>
    );
};

export default Message;
