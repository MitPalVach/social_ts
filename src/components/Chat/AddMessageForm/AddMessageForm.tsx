import React, {useState} from 'react';
import s from "../../App/App.module.css";
import {wsChannel} from "../../../pages/Chat/ChatPage";


const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        if (!message) return
        wsChannel.send(message)
        setMessage('')
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button onClick={sendMessage} className={s.main_btn}>отправить</button>
            </div>
        </div>
    );
};

export default AddMessageForm;
