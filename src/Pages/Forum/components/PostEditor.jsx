import React, {useState, useContext,lazy, Suspense} from "react";
import '../styles/PostEditor.css';
import ImagePostEditor from '../../Forum/components/ImagePostEditor';
import { UserContext } from "../../../Main/UserProvider/components/UserProvider";
import ForumDisplay from "./ForumDisplay";

console.log("PostEditor.js fired!");
var newPostBody;
var displayname="Anon";

const PostEditor =(props) => {
  const [inputValue, setInputValue] = useState("");

  console.log("PostEditor run!");
  const user = useContext(UserContext);
  if(user!=null){
    displayname=user.displayName;
    }else{
    displayname="Anon";
  }

  const handlePostEditorInputChange= (ev) => {
    setInputValue(ev.target.value);
  }

  const createPost=() => {
    props.addPost(displayname+": "+inputValue);
    setInputValue("");
  }

  return (
    <div className="panel panel-default post-editor">
      <div className="panel-body">
        <textarea className="form-control post-editor-input" value={inputValue} onChange={(ev) =>handlePostEditorInputChange(ev)}/>
        <button className="btn btn-primary post-editor-button" onClick={()=>{createPost();}}>Post</button>
      </div>
    </div>
  )
}

export default PostEditor;




// class PostEditor extends Component {
//   constructor(props, context) {
//     super(props, context);
    

//     // setTimeout(function(){ displayName = props.childuserz.displayName;},3000);
//     // console.log(displayName);
//     // displayName=props.childuserz._currentValue.displayName;
//     // async function loadMyModule() {
//     // const imported = await import("../../Forum/components/UserHooker.jsx");
//     // };
//     // loadMyModule();
//     // setTimeout(function(){ 
//     //   const UserContext = lazy(() => import('../../../Main/UserProvider/components/UserProvider'));
//     //   console.log(UserContext);
//     //   // displayName = UserContext._currentValue.displayName;
//     // }, 5000);
//     // console.log(displayName);

//     this.state = {
//       newPostBody: '',
//     };
    
//     this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
//     this.createPost = this.createPost.bind(this);
//   }