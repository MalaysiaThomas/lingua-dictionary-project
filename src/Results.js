import React from "react";
import "./Results.css";

export default function Results(props) {
    console.log("RESULTS");
    console.log(props.results);
    // let word = props.results.word;
    // let phonetic = props.results.phonetic;
    // let partOfSpeech = props.results.meanings[0].partOfSpeech;
    // let definition = props.results.meanings[0].definition
    

    if (props.results) {
        return (
          <div className="Results">
            {/* <h3>{word}</h3>
            <h4>{phonetic}</h4>
            <p>{partOfSpeech}</p> */}

            {/* <ul>
              <li>{props.results.meaning[0].synonyms[0]}</li>
              <li>{props.results.meaning[0].synonyms[1]}</li>
              <li>{props.results.meaning[0].synonyms[2]}</li>
            </ul> */}
          </div>
        );
    } else {
        return null;
    }
}