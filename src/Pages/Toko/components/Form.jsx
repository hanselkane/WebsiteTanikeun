import React, { useContext, useState, useRef, useEffect} from "react";
import "../styles/Toko.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import {databasez} from "../../../Main/UserProvider/components/UserProvider";
import {firebaseapp} from '../../../firebase';

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFuc2Vsa2FuZSIsImEiOiJja3E0bTI4bzEwZ2owMndudDgzb3Vlem1jIn0.cIU-KvW54pXSp3RGFMzQXw';

function Form (props) {
    const mapContainter = useRef(null);
    const map = useRef(null);

    const [Judul,setJudul] = useState(null);
    const [Deskripsi,setDeskripsi] = useState(null);
    const [lng, setLng] = useState(106.9);
    const [lat,setLat]  = useState(-6.3);
    const [zoom, setZoom]= useState(7);
    const [filelogo,setFileLogo] = useState(null);

    useEffect(() =>{
        if (map.current) return;
        map.current= new mapboxgl.Map({
        container: mapContainter.current,
        style: 'mapbox://styles/mapbox/satellite-streets-v11',
        center: [lng, lat],
        zoom: zoom
        });

        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        })
        
        map.current.addControl(
        new MapboxGeocoder({
            accessToken:mapboxgl.accessToken,
            mapboxgl:mapboxgl
        })
        )
    });

    function submitclicked() {
        const datatokoToSave = {Judul,Deskripsi,lat,lng,filelogo};
        databasez.ref("DataToko").push().set(datatokoToSave);
        setJudul(''); setDeskripsi('');
        props.passsetactivemenu(0);
    }

    function boxreaderJudul (ev){
        setJudul(ev.target.value);
    }
    function boxreaderDeskripsi (ev){
        setDeskripsi(ev.target.value);
    }

    const onChange = (e) => {
        const file = e.target.files[0];
        const storageRef = firebaseapp.storage().ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file);
        console.log("File Uploadad !"+fileRef);
        fileRef.getDownloadURL().then((url) => {setFileLogo(url);});
    }

    return(
        <div class="row">
            <div class="columnleft">
                <div className="tokoformheader" style={{"margin-top":"1px"}}>Nama Toko</div>
                <input className="tokoformjudul" 
                    style={{"border-style":"none none solid none", "border-width":"1px"}} 
                    placeholder="Rasana Rasyidah"
                    value={Judul} onChange={boxreaderJudul}/>
                <div className="tokoformheader">Deskripsi</div>
                <textarea className="tokoformdeskripsi" 
                    style={{"border-style":"none none solid none","border-width":"1px"}}
                    placeholder="Tempat ini merupakan sarana pembelajaran bagi SMK Rasana Rasyidah"
                    value={Deskripsi} onChange={boxreaderDeskripsi}/>
                <div style={{visibility:'hidden',"margin-bottom":"1em"}}>filler</div>
                <div className="tokoformheader" style={{"margin-top":"0.1em"}}>Logo</div>
                <input className="form-control" style={{"float":"left","margin-bottom":"1em"}} type="file" onChange={onChange}/>
            </div>
            <div class="columnright">
                <div className="mainRunner">
                <div className="sidebar">
                    Bujur: {parseFloat(lng).toFixed(1)} | Lintang: {parseFloat(lat).toFixed(1)}
                </div>
                    <img className="img1" src="https://firebasestorage.googleapis.com/v0/b/tanikeun-ac443.appspot.com/o/marker.png?alt=media&token=cf979007-28c9-4f97-ae2f-a6464ad1ae7b" 
                        width="40px" height="auto" style={{"position":"absolute","bottom":"55%","right":"45%"}}/>
                    <div ref={mapContainter} className="map-container" style={{"z-index":"0","position":"relative"}}/>
                    <div>Letakkan penanda merah pada tokomu...</div>
                </div>
            </div>
            <div style={{visibility:'hidden'}}>filler</div>
            <button className="btn-submit" onClick={submitclicked}>Submit</button>
        </div>
    )
};

export default Form;
