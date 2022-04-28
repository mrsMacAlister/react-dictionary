import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary () {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        console.log(response.data[0].meanings[0].synonyms[0]);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        /*alert(`Searching for "${keyword}" definition.`);*/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus="on" onChange={handleKeywordChange} />
                <button type="submit">Find</button>
            </form>
            <Results results={results} />
        </div>
    );
}