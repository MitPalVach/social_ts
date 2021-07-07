import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/State";


type PropsType = {
    postData: Array<PostDataType>
    addPost: (postMessage: string) => void
    updateNewPost: (newText: string) => void
    newPostText: string
}
const MyPosts: React.FC<PropsType> = (props) => {
    let postElements = props.postData.map(p => <Post key={p.id} post={p}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current?.value
        props.addPost(text || '')
    }
    let onPostChange = () => {
        let text = newPostElement.current?.value
        props.updateNewPost(text || '');
    }
    return (
        <div>
            My posts
            <div>
                <textarea className={styles.myPosts__input}
                          placeholder='Введите сообщение...'
                          value={props.newPostText}
                          ref={newPostElement}
                          onChange={onPostChange}
                />
                <button className={styles.myPosts__button}
                        onClick={() => {
                            addPost()
                        }}>Введите сообщение
                </button>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;