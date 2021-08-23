import React, { useContext, useState } from "react";
import "../styles/Toko.css";

function Form () {
    const [isiJudul,setIsiJudul] = useState(null);
    const [isiDeskripsi,setIsiDeskripsi] = useState(null);

    function submitclicked() {
        console.log(isiJudul+isiDeskripsi);
        setIsiJudul(''); setIsiDeskripsi('');
    }

    function boxreaderJudul (ev){
        setIsiJudul(ev.target.value);
    }
    function boxreaderDeskripsi (ev){
        setIsiDeskripsi(ev.target.value);
    }

    return(
        <div >
            <div>
                <div className="tokoformheader" style={{"margin-top":"1px"}}>Nama Toko</div>
                <input className="tokoformjudul" 
                    style={{"border-style":"none none solid none", "border-width":"1px"}} 
                    placeholder="Rasana Rasyidah"
                    value={isiJudul} onChange={boxreaderJudul}/>
            </div>
            <div>
                <div className="tokoformheader">Deskripsi</div>
                <textarea className="tokoformdeskripsi" 
                    style={{"margin-bottom":"0.5em","border-style":"none none solid none","border-width":"1px"}}
                    placeholder="Tempat ini merupakan sarana pembelajaran bagi SMK Rasana Rasyidah"
                    value={isiDeskripsi} onChange={boxreaderDeskripsi}/>
            </div>
            <div style={{visibility:'hidden'}}>filler</div>
            <div style={{visibility:'hidden'}}>filler</div>
            <div style={{visibility:'hidden'}}>filler</div>
            <div>
                <div className="tokoformheader" style={{"margin-top":"2em"}}>Gambar</div>
                <input className="form-control" style={{"float":"left","margin-bottom":"1em"}} type="file"/>
            </div>
            <div style={{visibility:'hidden'}}>filler</div>
            <button className="btn-submit" onClick={submitclicked}>Submit</button>
        </div>
    )
};

export default Form;