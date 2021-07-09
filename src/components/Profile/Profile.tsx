import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type PropsType = {
    store: any

}
const Profile: React.FC<PropsType> = (props) => {
    let state = props.store.getState().profilePage

    return (
        <div>
            <MyPostsContainer postData={state.postData}
                              newPostText={state.newPostText}
                              dispatch={props.store.dispatch}
            />
        </div>
    )
}

export default Profile;