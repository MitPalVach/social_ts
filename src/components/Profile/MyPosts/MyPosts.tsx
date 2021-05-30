import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    let postData = [
        {message: 'Hi, how are you?', id: 1, likeCount: 12},
        {message: 'What do you think about JS?', id: 2, likeCount: 22},
        {message: 'I learn not only JS but and TS!', id: 3, likeCount: 42},
        {message: 'Oh, it\'s cool', id: 4, likeCount: 23}
    ]
    return (
        <div>
            My posts
            <div>
                <textarea className={styles.myPosts__input}
                          placeholder='Введите сообщение...'></textarea>
                <button className={styles.myPosts__button}>Введите сообщение</button>
            </div>
            <div className={styles.posts}>
                <Post key={postData[0].id} message={postData[0].message} likeCount={postData[0].likeCount}/>
                <Post key={postData[1].id} message={postData[1].message} likeCount={postData[1].likeCount}/>
                <Post key={postData[2].id} message={postData[2].message} likeCount={postData[2].likeCount}/>
                <Post key={postData[3].id} message={postData[3].message} likeCount={postData[3].likeCount}/>
            </div>
        </div>
    )
}

export default MyPosts;