import React ,{useContext} from 'react';
import {UserContext} from "../../../Main/UserProvider/components/UserProvider";

var userhooked;
const UserHooker =()=> {
    console.log("Hooker Called");
    userhooked = useContext(UserContext);
    console.log(UserContext);
}

export default UserHooker;