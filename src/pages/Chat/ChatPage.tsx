import React from 'react';
import s from '../../components/App/App.module.css';


const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: React.FC = () => {
    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    );
};

const Messages: React.FC = () => {
    const messages = ['1', '2', '3']
    return (
        <div>
            {messages.map((message: string) => <Message/>)}
        </div>
    );
};

const Message: React.FC = () => {
    const message = {
        url: 'https://via.placeholder.com/30',
        author: 'ddd',
        text: 'hello',
    }

    return (
        <div>
            <img src={message.url} alt="avatar"/>
            <b>{message.author}</b>
            <div>
                {message.text}
            </div>
            <hr/>
        </div>
    );
};

const AddMessageForm: React.FC = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button className={s.main_btn}>отправить</button>
            </div>
        </div>
    );
};


export default ChatPage
