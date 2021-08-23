import React, { useContext,useState } from "react";
import {Link} from "react-router-dom";
import Form from "./Form";
import {CSSTransition} from 'react-transition-group';
import "../styles/Toko.css";

console.log("Toko.jsx fired!");

function Toko() {
  const style = {
    color:'white'
  };
  const [activeMenu, setActiveMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState(null);
  const [txtMarginTop, setTxtMarginTop] = useState(null);

  function ExpandForm (){
    return (<Form/>)
  }

  function calcHeight (el){
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  return (
    <div>
      <button className="btn-addtoko" onClick={()=>{setActiveMenu(!activeMenu)}}>
        Daftarkan Toko +
      </button>
      <div className="dropdown" style={{height:menuHeight}}>
        <CSSTransition 
          in={activeMenu == true} 
          unmountOnExit 
          timeout={400}
          classNames="input-form"
          onEnter={calcHeight}
          onExit={()=>{setMenuHeight(0);}}
          >
          <Form/>
        </CSSTransition>
      </div>
      <div className="txtdropdown" style={{"margin-top":menuHeight+20}}>
        <CSSTransition 
          in={activeMenu == true} 
          timeout={400}
          classNames="txtbottom"
          >
          <div className="txtbottom">...........</div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Toko;
