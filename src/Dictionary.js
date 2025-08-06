import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css'; 
import Results from './Results';

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);


    function handleResponse(response) {
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();
        const key = `34a0b3608792f91t1oc6463e450b7ab0`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
        axios.get(apiUrl).then(handleResponse)
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

  return (
    <div className="Dictionary">
      <h1>
        Lingua <br /> Dictionary
      </h1>

      <div className="hint">
        <p>
          Type any word in the search bar below to get its definition, pronunciation, usage, and more.
        </p>
      </div>

      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          autoFocus={true}
          placeholder="Search for a word..."
        />
        <input type="submit" value="Search" />
      </form>

      <Results results={results} />
    </div>
  );
}