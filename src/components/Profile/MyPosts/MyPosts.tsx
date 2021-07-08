import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, PostDataType} from "../../../redux/State";


type PropsType = {
    postData: Array<PostDataType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    let postElements = props.postData.map(p => <Post key={p.id} post={p}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        // let text = newPostElement.current?.value
        props.dispatch(addPostAC(props.newPostText))
    }
    let onPostChange = () => {
        let text = newPostElement.current?.value
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text || ''})
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