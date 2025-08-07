import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
      <footer className="Footer">
        <p>Project created by {" "}<a
          href="https://github.com/MalaysiaThomas"
          target="_blank"
          rel="noopener noreferrer"> 
        Malaysia Thomas
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/MalaysiaThomas/lingua-dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>. 
        Hosted on{" "}
        <a
          href="https://linguadictionary.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
        </p>
      </footer>
    );
}