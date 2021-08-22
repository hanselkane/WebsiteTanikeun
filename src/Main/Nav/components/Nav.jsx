import React, { useContext } from "react";
import "../styles/Nav.css";
import {Link} from "react-router-dom";

console.log("Nav.js fired!");

function Nav() {
  const style = {
    color:'white'
  };

  return (
    <nav class>
        <h3>
            Logo
        </h3>
        <u1 className= "nav-links">
            <Link style={style} to ="/">
            <li >Rumah</li>
            </Link>
            <Link style={style} to ="/Artikel">
            <li >Artikel</li>
            </Link>
            <Link style={style} to ="/Forum">
            <li >Forum</li>
            </Link>
            <Link style={style} to ="/Toko">
            <li >Toko</li>
            </Link>
            <Link style={style} to ="/SignIn">
            <li >SignIn</li>
            </Link>
        </u1>
    </nav>
  );
}

export default Nav;
