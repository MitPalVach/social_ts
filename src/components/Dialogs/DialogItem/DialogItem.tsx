import styles from './DialogItem.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/State";


type DialogItemTypes = {
    dialogs:DialogsType
}
const DialogItem: React.FC<DialogItemTypes> = (props) => {
    return (
        <div className={styles.dialogs__item}>
            <NavLink className={styles.dialogs__itemLink}
                     to={"/dialogs/" + props.dialogs.id} activeClassName={styles.dialogs__itemLink_active}>
                <img className={styles.dialogs__itemLink_img} src={props.dialogs.friendsAvatar} alt=""/>
                <div className={styles.dialogs__item_name}>
                    {props.dialogs.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;