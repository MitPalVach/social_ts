import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfileUserType} from "../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


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
            <h4 className={styles.dir__title}> My posts </h4>
            <div>
                <AddMessageFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    )
}

const AddNewPostForm: React.FC<InjectedFormProps> = (props) => {

    return (
        <form className={styles.myPosts__input} onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name='newPostText' placeholder={'Введите сообщение'}/>
            </div>
            <div>
                <button className={styles.myPosts__button}>Написать</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;