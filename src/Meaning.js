import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index){
            if (definition.example) {
                return (
                    <div key={index}>
                        <div className="definition">
                            <strong>Definition:</strong> {definition.definition}
                        </div>
                        <div className="example">
                            <strong>Example:</strong> <em>"{definition.example}"</em>
                        </div>
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                );
            } else {
                return (
                    <div key={index}>
                        <div className="definition">
                            <strong>Definition:</strong> {definition.definition}
                        </div>
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
            );
        }
        })}
       
        </div>);
}