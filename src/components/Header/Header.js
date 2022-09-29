import React, { useContext, useState, useEffect } from "react";
import "./Header.css";
import suggestionsArray from "../utils/suggestionsArray";
import ThingsContext from "../thingsContext";

export default function Header() {
  // const { setQuery } = props;

  const {toggleHamburger, setToggleHamburger} = useState(false);

  const {setQuery} = useContext(ThingsContext);

  const onButtonClick = (subreddit) => {
    setQuery(subreddit);
  };

  const onHamburgerClick = () => {
    setToggleHamburger(!toggleHamburger);
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
        <div className={{toggleHamburger} ? 'hamburger' : 'hamburger-active'}>
          <span
            onClick={() => {
              onHamburgerClick();
            }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </span>
        </div>
      </div>
      <div className="suggestionsDropdown">
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
