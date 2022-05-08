import React from "react";
import "./Phonetic.css";
import audio from "./images/volume-high-solid.svg";
import noAudio from "./images/volume-xmark-solid.svg";

export default function Phonetic(props) {
    if(props.phonetic.audio) {
        return (
            <div className="Phonetic">
                <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                    <img src={audio} alt="listen to audio" />
                </a>
                <span className="pronunciation">{props.phonetic.text}</span>
            </div>)
    } else {
        return (
            <div className="Phonetic">
                <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                    <img src={noAudio} alt="audio not available" />
                </a>
                <span className="pronunciation">{props.phonetic.text}</span>
                </div>)
        }
} 
            
            
        
    
