import React from 'react';
import Messages from "./Messages/Messages";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Chat: React.FC = () => {


    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    );
};

export default Chat;
