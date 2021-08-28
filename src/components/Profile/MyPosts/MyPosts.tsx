import React, {KeyboardEvent} from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfileUserType} from "../../../redux/profileReducer";


type PropsType = {
    profilePage: ProfileUserType
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    let state = props.profilePage

    let postElements = state.postData.map(p => <Post key={p.id} post={p}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let newPostText = state.newPostText

    let onAddPost = (newPostText: string) => {
        props.addPost(newPostText)
    }
    let onPostChange = () => {
        let text = newPostElement.current?.value
        if (typeof text === "string") {
            props.updateNewPostText(text)
        }
    }
    const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
        if (e.ctrlKey && e.key === 'Enter')
            onAddPost(newPostText)
    }

    return (
        <div>
            <h4 className={styles.dir__title}> My posts </h4>
            <div>
                <textarea className={styles.myPosts__input}
                          placeholder='Введите сообщение...'
                          value={newPostText}
                          ref={newPostElement}
                          onKeyPress={handleKeyDown}
                          onChange={onPostChange}
                />
                <button className={styles.myPosts__button}
                        onClick={() => {
                            onAddPost(newPostText)
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