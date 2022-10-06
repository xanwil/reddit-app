import React, { useContext, useState } from "react";
import "./MobileMenu.css";
import suggestionsArray from "../../utils/suggestionsArray";
import StoreContext from "../../contexts/storeContext";

export default function Hamburger() {
  const [isActive, setActive] = useState(false);

  const { setQuery, setActiveCommentsId } = useContext(StoreContext);

  // selects new subreddit to be displayed
  const onButtonClick = (suggestionLink) => {
    setQuery(suggestionLink);
    setActive(!isActive);
    setActiveCommentsId(false);
  };

  // changes hamburger menu from bars to cross
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div
        className={"mobile-menu " + (isActive ? "-active" : "")}
        onClick={toggleClass}
      >
        <span className="mobile-menu-bar"></span>
        <span className="mobile-menu-bar"></span>
        <span className="mobile-menu-bar"></span>
      </div>
      <div
        className={
          "mobile-menu-suggestions-dropdown " + (isActive ? "-active" : "")
        }
      >
        <ul>
          {suggestionsArray.map((suggestion, index) => {
            return (
              <li key={index}>
                <span onClick={() => onButtonClick(suggestion.link)}>
                  <a className="suggestions-link" href="#">
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
