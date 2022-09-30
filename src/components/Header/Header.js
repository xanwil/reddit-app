import React, { useContext, useState } from "react";
import "./Header.css";
import suggestionsArray from "../utils/suggestionsArray";
import ThingsContext from "../thingsContext";

export default function Header() {
  const [isActive, setActive] = useState(false);

  const { setQuery, setShowComments } = useContext(ThingsContext);

  const onButtonClick = (subreddit) => {
    setQuery(subreddit);
    setActive(!isActive);
    setShowComments(false);
  };

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className="header">
        <h1>
          <span className="pink">
            <i className="fa fa-reddit"></i> Reddit
          </span>
          <span className="black">Baking</span>
        </h1>
        <form className="inputContainer">
          <input type="text" placeholder="Search.." name="search"></input>
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <div
          className={isActive ? "hamburger-active" : "hamburger"}
          onClick={toggleClass}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div
        className={
          isActive ? "suggestionsDropdown-active" : "suggestionsDropdown"
        }
      >
        <ul>
          {suggestionsArray.map((suggestion, index) => {
            return (
              <li key={index}>
                <span onClick={() => onButtonClick(suggestion.link)}>
                  <a className="link" href="#">
                    {suggestion.subreddit}
                  </a>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
