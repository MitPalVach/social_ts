import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {ActionsTypes, RootStateType} from "../../redux/store";
import {connect} from "react-redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer: React.FC = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;