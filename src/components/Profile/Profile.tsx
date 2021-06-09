import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {PostDataType} from "../../State";

type PropsType = {
    postData: Array<PostDataType>
}
const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <MyPosts postData={props.postData}/>
        </div>
    )
}

export default Profile;