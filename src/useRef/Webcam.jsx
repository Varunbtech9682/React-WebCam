import React, { useRef, useState } from 'react'


let Webcam = () => {
    let camRef = useRef();
    let btnRef = useRef();
    console.log(btnRef);
    let [state,  setState] = useState(true);

    let OnCam = () =>{
        setState(!state);
        if (state) {
            window.navigator.mediaDevices
            .getUserMedia({
                audio:true,
                video: {width: "100%", height:"100vh"},
            })
            .then(stream=>{
                camRef.current.srcObject = stream;
                camRef.current.play();
                btnRef.current.style.background="red";
                btnRef.current.style.height="10px";
                btnRef.current.style.width="10px";
                btnRef.current.style.borderRadius="50%";
                
            })
            .catch(err=>{
                console.log(err);
            })
        } else{
            console.log(state);
            camRef.current.pause();
        }
    };
    return (
        <div
            style={{
                border: "2px solid green",
            }}
        >
        <section style={{display: "flex"}}>
            <h1 style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center",}}>
                <i>Web Camera</i>
                <div ref={btnRef}></div>
            </h1>
        </section>
        <video 
            ref={camRef}
            style={{
                width:"100%",
            }}
        ></video>
        <br />
        <button 
        onClick={OnCam}
            style={{
                margin:"auto",
                display:"block",
                width:"100%",
                border:"none",
                height:"40px",
                background:"Green",
                color:"white",
                cursor:"pointer",
            }}
            >
            {state == true ? "PLAY" : "PAUSE"}
        </button>            
    </div>
    );
};
export default Webcam
