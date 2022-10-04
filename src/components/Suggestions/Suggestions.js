import React, { useContext } from "react";
import "./suggestions.css";
import suggestionsArray from "../utils/suggestionsArray";
import ThingsContext from "../thingsContext";

export default function Suggestions() {
  const { setQuery, setActiveCommentsId } = useContext(ThingsContext);

  //changes page to clicked subreddit and closes comments if open
  const onButtonClick = (subreddit) => {
    setQuery(subreddit);
    setActiveCommentsId(null);
  };

  return (
    <div className="suggestions">
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
  );
}
