import React from "react";
import styles from './Post.module.css';


const Post = () => {
    return (
        <div className={styles.postsItem}>
            <div className={styles.postsItem__inner}>
                <img className={styles.postsItem__avatar}
                     // src="images/avatar_to_all.png"
                     alt="avatar_to_all"/>
                Message
            </div>
            <div className={styles.postsItem__activity}>
                <span className={styles.postsItem__like}>Нравится</span>
                <span className={styles.postsItem__send}>Написать сообщение</span>
            </div>
        </div>
    )
}

export default Post;