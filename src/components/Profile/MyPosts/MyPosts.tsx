import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfileUserType} from "../../../redux/profileReducer";
import AddMessageForm from "../../Dialogs/AddMessageForm/AddMessageForm";


type PropsType = {
    profilePage: ProfileUserType
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    let state = props.profilePage
    let postElements = state.postData.map(p => <Post key={p.id} post={p}/>);

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <div>
                <AddMessageForm onSubmit={onAddPost}/>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;