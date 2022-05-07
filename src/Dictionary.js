import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary (props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data);
        console.log(response.data[0].meanings[0].synonyms[0]);
        setResults(response.data[0]);
    }

    function search() {
        /*alert(`Searching for "${keyword}" definition.`);*/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if(loaded) {
    return (
        <div className="Dictionary">
            <section>
                <header className="App-header">
                    <h1>Dictionary</h1>
                    <h3>Which word would you like to look up?</h3>
                </header>
                <form onSubmit={handleSubmit}>
                    <input type="search" autoFocus="on" onChange={handleKeywordChange} />
                    <button type="submit">Find</button>
                </form>
                <div className="hint">
                    Suggested words: light, surf, time...
                </div>
            </section>
            <Results results={results} />
        </div>
    );
} else {
    load();
}
}