import React from 'react';
import {firebaseapp} from '../../../firebase';

console.log("ImagePostEditor.js fired!");

function ImagePostEditor (props){
    const onChange = (e) => {
        const file = e.target.files[0];
        const storageRef = firebaseapp.storage().ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file);
        console.log("File Uploadad !"+fileRef);
        fileRef.getDownloadURL().then((url) => {props.addPost(url);});
        // props.addPost("IImage"+fileRef.getDownloadURL());
    }

    return (
        <input type = "file" onChange={onChange}/>
    )
}

export default ImagePostEditor;