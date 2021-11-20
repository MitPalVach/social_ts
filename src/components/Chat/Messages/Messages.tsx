import React, {useEffect, useState} from 'react';
import Message from "./Message";
import {ChatMessageType, wsChannel} from "../../../pages/Chat/ChatPage";


const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        wsChannel.addEventListener('message', (e:  MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...messages, ...newMessages])
        })
    }, [])

    return (
        <div style={{height: '600px', overflowY: 'auto'}}>
            {messages.map((message, index) => <Message key={index} message={message}/>)}
        </div>
    );
};

export default Messages;
