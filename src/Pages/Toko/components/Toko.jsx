import React, { useContext,useEffect,useState } from "react";
import {Link} from "react-router-dom";
import Form from "./Form";
import {CSSTransition} from 'react-transition-group';
import "../styles/Toko.css";
import {databasez} from "../../../Main/UserProvider/components/UserProvider";


console.log("Toko.jsx fired!");
var daftartoko;

function Toko() {
  const style = {
    color:'white'
  };

  const [activeMenu, setActiveMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState(null);
  const [txtMarginTop, setTxtMarginTop] = useState(null);

  useEffect (()=>{
    databasez.ref("DataToko").on('child_added', snapshot => {
      const response = snapshot.val();
      daftartoko=response;
      // console.log(daftartoko);
      console.log("useEffect");
      console.log(daftartoko);
    }, (errorObject) => {
      console.log('The read failed: ' + errorObject.name);
    }); 
  });

  function calcHeight (el){
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function tampiltoko(snapshotdata){
    console.log("tampiltoko fired");
    console.log(snapshotdata)
    if(snapshotdata==null){return(1)};
    console.log("tampiltoko fired!");
    console.log(snapshotdata);
    return(
      // .Judul,snapshot.Deskripsi,snapshot.lat,snapshot.lng,snapshot.filelogo
      <div className="txtbottom card">
        <div class="row">
          <div class="columnleft">
            <img src={snapshotdata.filelogo} width="20%" height="auto" className="center"/>
          </div>
          <div class="columnright">
            <h2 style={{"text-align":"left","font-size":"3em"}}>{snapshotdata.Judul}</h2>
            <div style={{"text-align":"left"}}>{snapshotdata.Deskripsi}</div>
            <div style={{"text-align":"left"}}>Lintang: {snapshotdata.lat}
              , Bujur: {snapshotdata.lng} </div>
          </div>
        </div>
      </div>
    )
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
          <Form passsetactivemenu={setActiveMenu}/>
        </CSSTransition>
      </div>
      <div className="txtdropdown" style={{"margin-top":menuHeight+20}}>
        <CSSTransition 
          in={activeMenu == true} 
          timeout={400}
          classNames="txtbottom"
          >
          <div>
            {
              tampiltoko(daftartoko)
            }
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Toko;
