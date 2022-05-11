import React from "react";
import "./Phonetic.css";
import audio from "./images/volume-high-solid.svg";
import noAudio from "./images/volume-xmark-solid.svg";

export default function Phonetic(props) {
    let audioFile = new Audio(props.phonetic.audio);
    
    function playAudio () {
        audioFile.play();
    }

    if(props.phonetic.audio) {
        return (
            <div className="Phonetic">
                <button onClick={playAudio}><img src={audio} alt="listen to audio" /></button>
                <span className="pronunciation">{props.phonetic.text}</span>
            </div>)
    } else {
        return (
            <div className="Phonetic">
                <button onClick={playAudio}><img src={noAudio} alt="listen to audio" /></button>
                <span className="pronunciation">{props.phonetic.text}</span>
            </div>)
        }
} 
            
            
        
    
