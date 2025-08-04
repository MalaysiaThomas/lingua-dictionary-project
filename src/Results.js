import React from "react";
import "./Results.css";

export default function Results(props) {
    console.log(props.results);
    if (props.results) {
        let word = props.results.word;
        let phonetic = props.results.phonetic;
        let partOfSpeech = props.results.meanings[0].partOfSpeech;
        let definition = props.results.meanings[0].definition;
        let synonyms = props.results.meanings[0].synonyms;
        return (
            <div className="Results">
                <h3>{word}</h3>
                <h4>{phonetic}</h4>
                <p>{partOfSpeech}</p>
                <p>{definition}</p>
                <h5>Synonyms:</h5>

                <ul>
                <li>{synonyms[0]}</li>
                <li>{synonyms[1]}</li>
                <li>{synonyms[2]}</li>
                </ul>
            </div>
            );
    } else {
        return null;
    }
}
