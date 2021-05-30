import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


let postData = [
    {message: 'Hi, how are you?', id: 1, likeCount: 12},
    {message: 'What do you think about JS?', id: 2, likeCount: 22},
    {message: 'I learn not only JS but and TS!', id: 3, likeCount: 42},
    {message: 'Oh, it\'s cool', id: 4, likeCount: 23}
]
const MyPosts = () => {
    let postElements = postData.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/>);
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