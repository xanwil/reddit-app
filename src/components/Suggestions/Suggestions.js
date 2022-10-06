import React, { useContext } from "react";
import "./suggestions.css";
import suggestionsArray from "../../utils/suggestionsArray";
import StoreContext from "../../contexts/storeContext";

export default function Suggestions() {
  const { query, setQuery, setActiveCommentsId } = useContext(StoreContext);

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
                <span
                  className={
                    "suggestions-link " +
                    (suggestion.link === query ? "-active" : "")
                  }
                >
                  {suggestion.subreddit}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
