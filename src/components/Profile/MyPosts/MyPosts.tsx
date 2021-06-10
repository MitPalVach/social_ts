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
    let postElements = props.postData.map(p => <Post post={p}/>);
    let newPostElement = React.createRef();
    let addPost = (newPostElement:any) => {
        let text = newPostElement.current.value
        props.addPost(text)
        props.updateNewPost('')
    }
    let onPostChange = (newPostElement:any) => {
        let text = newPostElement.current.value
        props.updateNewPost(text);
    }
    return (
        <div>
            My posts
            <div>
                <textarea className={styles.myPosts__input}
                          placeholder='Введите сообщение...'
                          value={props.newPostText}
                          // ref={newPostElement}
                />
                <button className={styles.myPosts__button}
                        onClick={() => {
                            props.addPost(props.newPostText)
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