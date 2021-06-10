import React from "react";
import styles from './Post.module.css';
import avatar_to_all from './../../../../images/avatar_to_all.png'
import {PostDataType} from "../../../../redux/State";


type PostType = {
    post: PostDataType
}
const Post: React.FC<PostType> = (props) => {
    return (
        <div className={styles.postsItem}>
            <div className={styles.postsItem__inner}>
                <img className={styles.postsItem__avatar}
                     src={avatar_to_all}
                     alt="avatar_to_all"/>
                {props.post.message}
            </div>
            <div className={styles.postsItem__activity}>
                <span className={styles.postsItem__like}>{props.post.likeCount} Нравится</span>
                <span className={styles.postsItem__send}>Написать сообщение</span>
            </div>
        </div>
    )
}

export default Post;