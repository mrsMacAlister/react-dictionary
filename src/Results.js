import React from "react";

export default function Results(props){
   
  /* setDefinition({
        word: props.results.word,

    }) */

    if (props.results){
        return (
            <div className="Results">hello from Results</div>
        )

    } else {
        return null;
    }
    

}