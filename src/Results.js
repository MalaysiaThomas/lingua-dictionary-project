import React from "react";
import "./Results.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Results(props) {
    console.log(props.results);
    if (props.results) {
        let word = props.results.word;
        let phonetic = props.results.phonetic;
        let partOfSpeech = props.results.meanings[0].partOfSpeech;
        let definition = props.results.meanings[0].definition;
        let example = props.results.meanings[0].example;
        let synonyms = props.results.meanings[0].synonyms;
        return (
          <div className="Results">
            <h3>{word}</h3>
            <h4>{phonetic}</h4>
            <p>{partOfSpeech}</p>
            <p>{definition}</p>
            <Example example={example} />
            <Synonyms synonyms={synonyms} />
          </div>
        );
    } else {
        return null;
    }
}
