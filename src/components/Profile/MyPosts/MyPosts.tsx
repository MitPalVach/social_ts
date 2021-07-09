import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/store";


type PropsType = {
    postData: PostDataType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    let postElements = props.postData.map(p => <Post key={p.id} post={p}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current?.value
        if (typeof text === "string") {
            props.updateNewPostText(text)
        }
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
                            onAddPost()
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