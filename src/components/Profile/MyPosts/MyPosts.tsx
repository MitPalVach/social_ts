import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <button>Введите сообщение</button>
            </div>
            <div className={styles.posts}>
                <Post message={'I lear ts'} likeCount={20}/>
                <Post message={'It\'s to hard'} likeCount={10}/>
                <Post message={'But it\'s ok'} likeCount={15}/>
            </div>
        </div>
    )
}

export default MyPosts;