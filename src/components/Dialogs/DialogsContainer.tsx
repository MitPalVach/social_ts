import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


type PropsType = {
    store: any
}
const DialogsContainer: React.FC<PropsType> = (props) => {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <Dialogs
            newMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}/>
    )
}

export default DialogsContainer;