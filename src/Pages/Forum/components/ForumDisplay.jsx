import React, { useContext, Component, lazy, Suspense} from "react";
import firebase from "firebase/app";
import ImagePostEditor from './ImagePostEditor';
import 'firebase/database';
import {databasez, UserContext} from '../../../Main/UserProvider/components/UserProvider';
import UserProvider from "../../../Main/UserProvider/components/UserProvider";
import PostEditor from "./PostEditor";

console.log("index.js fired!");
const Post = lazy (() => import('./Post'));
// const PostEditor = lazy (() => import('./PostEditor'));

class ForumDisplay extends Component {
  constructor(props) {
    super(props);

    this.databaseRef = databasez.ref('Posts');
    this.addPost = this.addPost.bind(this);
    this.updateLocalState = this.updateLocalState.bind(this);
    
    this.state = {
      posts: ['Selamat datang !!'],
    }
  }

  componentWillMount() {
    const {updateLocalState} = this;
    this.databaseRef.on('child_added', snapshot => {
      const response = snapshot.val();
      updateLocalState(response);
    });
  }

  addPost(postBody) {
    const postToSave = {postBody};
    this.databaseRef.push().set(postToSave);
  }

  updateLocalState(response) {
    const posts = this.state.posts;
    const brokenDownPost = response.postBody.split(/[\r\n]/g);
    posts.push(brokenDownPost);
    this.setState({
      posts: posts,
    });
  }

  render() {
    return (
        <div>
            {
              this.state.posts.map((postBody, idx) => {
                return (
                  <Post key={idx} postBody={postBody}/>
                )
              })
            }
            <ImagePostEditor addPost={this.addPost}/>
            <PostEditor addPost ={this.addPost} />
              {/* {user => <PostEditor addPost={this.addPost} childuserz={user}/>} */}
            {/* <UserContext.Consumer>
              {user => {
                setTimeout(()=>{ return(<PostEditor addPost={this.addPost} childuserz={user}/>);},2000);
                }}
            </UserContext.Consumer> */}
        </div>
    );
  }
}

export default ForumDisplay;