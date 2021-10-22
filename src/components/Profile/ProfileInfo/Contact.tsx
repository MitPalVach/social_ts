import React from 'react';
import styles from "./ProfileInfo.module.css";


type ContactType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return (
        <div className={styles.profileInfo__item}>
            <b>{contactTitle}</b> {contactValue}
        </div>
    );
};

export default Contact;