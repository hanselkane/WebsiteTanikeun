import React, { lazy, Suspense, Component, createContext } from "react";
import { generateUserDocument } from "../../../firebase";
import firebase from 'firebase/app';
import 'firebase/database';
import PostEditor from '../../../Pages/Forum/components/PostEditor';

console.log("UserProvider.js fired!");
export const UserContext = createContext({ user: null });
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const databasez = firebase.database();

class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };
  // <div>
  //   <Router>
  //     <Nav/>
  //       <Switch>
  //         <Route path="/" exact component={Rumah}/>
  //         <Route path="/Artikel" component={Artikel}/>
  //         <Route path="/Forum" exact component={Forum}/>
  //         <Route path="/Peta" exact component={Peta}/>
  //         <Route path="/SignIn" exact component={SignIn}/>
  //       </Switch>
  //   </Router>
  // </div>
  render() {
    // var intervalId = setInterval(function(){
    //   console.log("Interval fired!");
    //   console.log(this.state);
    //   if(this.state!=null){
    //     console.log("UserContext filled");
    //     console.log(this.state);
    //   }
    // }, 500)
    const { user } = this.state;
    console.log("UserContext filled!");
    // console.log("UP returned !!!!");
    // console.log(user);
    return (
      <div>
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
      </div>
    );
  }
}

export default UserProvider;
