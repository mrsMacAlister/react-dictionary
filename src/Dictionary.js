import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data);
    console.log(response);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    /*let pexelsApiKey = `563492ad6f917000010000010ff103a747624e7c83fb15e8d55379e8`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);*/
    let pexelsApiKey = `563492ad6f917000010000010ff103a747624e7c83fb15e8d55379e8`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: `${pexelsApiKey}`,
        },
      })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <header className="App-header">
            <h3>Which word would you like to look up?</h3>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <input
                  type="search"
                  autoFocus="on"
                  onChange={handleKeywordChange}
                />
              </div>
              <div className="col-3 col-sm-2">
                <button type="submit">Find</button>
              </div>
            </div>
          </form>

          <div className="hint">Suggested words: light, surf, time...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
