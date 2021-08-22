import './App.css';
import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

const Rumah = lazy (() => import('./Pages/Rumah/components/Rumah'));
const Artikel = lazy (() => import('./Pages/Artikel/components/Artikel'));
const ForumDisplay = lazy (() => import('./Pages/Forum/components/ForumDisplay'));
const Toko = lazy (() => import('./Pages/Toko/components/Toko'));
const SignIn = lazy (() => import('./Pages/Login/components/SignIn'));
const UserProvider = lazy (() => import('./Main/UserProvider/components/UserProvider'));
const Nav = lazy (() => import('./Main/Nav/components/Nav'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Page is loading...</div>}>
        <UserProvider>
          <div>
              <Router>
                <Nav/>
                  <Switch>
                    <Route path="/" exact component={Rumah}/>
                    <Route path="/Artikel" component={Artikel}/>
                    <Route path="/Forum" exact component={ForumDisplay}/>
                    <Route path="/Toko" exact component={Toko}/>
                    <Route path="/SignIn" exact component={SignIn}/>
                  </Switch>
              </Router>
          </div>
        </UserProvider>
      </Suspense>
    </div>
  );
}

export default App;

// <Route path="/shop/:id" component={ItemDetail}/>

