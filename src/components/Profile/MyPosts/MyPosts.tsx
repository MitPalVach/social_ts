import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/State";


type PropsType = {
    postData: Array<PostDataType>
}

const MyPosts: React.FC<PropsType> = (props) => {
    let postElements = props.postData.map(p => <Post post={p}/>);
    return (
        <div>
            My posts
            <div>
                <textarea className={styles.myPosts__input}
                          placeholder='Введите сообщение...'>s</textarea>
                <button className={styles.myPosts__button}>Введите сообщение</button>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;