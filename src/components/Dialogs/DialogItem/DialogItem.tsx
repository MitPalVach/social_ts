import React from "react";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/dialogsReducer";
import s from '../../App/App.module.css';


type DialogItemTypes = {
    dialogs: DialogsType
}
const DialogItem: React.FC<DialogItemTypes> = (props) => {
    return (
        <div className={s.user__item}>
            <NavLink className={s.user__itemLink}
                     to={"/dialogs/" + props.dialogs.id} activeClassName={s.user__itemLink_active}>
                <img className={s.user__itemLink_img} src={props.dialogs.friendsAvatar} alt=""/>
                <div className={s.user__item_name}>
                    {props.dialogs.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;