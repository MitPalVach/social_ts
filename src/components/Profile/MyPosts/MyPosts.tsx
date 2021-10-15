import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfileUserType} from "../../../redux/profileReducer";
import AddPostForm from "../AddPostForm/AddPostForm";


type PropsType = {
    profilePage: ProfileUserType
    addPost: (newPostText: string) => void
}

const MyPosts = React.memo((props: PropsType) => {
    console.log('sd');
    let state = props.profilePage
    let postElements = state.postData.map(p => <Post key={p.id} post={p}/>);

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText)
        values.newPostText = ''
    }

    return (
        <div>
            <div>
                <AddPostForm onSubmit={onAddPost}/>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    )
})


export default MyPosts;


// class MyPosts extends React.PureComponent<PropsType> {
//
//     // shouldComponentUpdate(nextProps: Readonly<PropsType>, nextState: Readonly<{}>): boolean {
//     //     return this.props === nextProps || nextState === this.state
//     // }
//
//     render() {
//         console.log('sd');
//         let state = this.props.profilePage
//         let postElements = state.postData.map(p => <Post key={p.id} post={p}/>);
//         // let postElements = this.props.profilePage.postData.map(p => <Post post={p} key={p.id}/>)
//
//         let onAddPost = (values: any) => {
//             this.props.addPost(values.newPostText)
//             values.newPostText = ''
//         }
//
//         return (
//             <div>
//                 <div>
//                     <AddPostForm onSubmit={onAddPost}/>
//                 </div>
//                 <div className={styles.posts}>
//                     {postElements}
//                 </div>
//             </div>
//         )
//     }
// }


