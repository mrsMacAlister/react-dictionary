import React from "react";

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
        <div className="Phonetic">
            Hello from Phoneticssss
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Audio</a>
            {props.phonetic.text}
        </div>)}
        
            
            
        
    
