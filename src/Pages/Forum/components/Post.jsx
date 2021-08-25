import React from 'react';
import '../styles/Post.css';

console.log("Post.js fired!");

const Post = (props) => {
    const {key, postBody} = props;
    if(postBody[0].substring(0,5)==="https"){
        console.log(postBody[0]);
        return(<img src={postBody[0]} width="300" 
        height="auto" className="mx-auto"/>)
    } else{
    return(
    <div className="panel panel-default post-body">
        <div className="panel-body">
            <div>{postBody}</div>
        </div>
    </div>
    )};
};

export default Post;
