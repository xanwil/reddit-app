
import React from "react";
import "./suggestions.css";
import suggestionsArray from "../utils/suggestionsArray";

export default function Suggestions(props) {
const {setQuery} = props;


  const onButtonClick = (subreddit) => {
    setQuery(subreddit)
  }

  return (
    <div className="suggestions">
      <ul>
      {suggestionsArray.map((suggestion, index) => {
        return (
          <li>
          <span
            onClick={() => 
              onButtonClick(suggestion.link)
            }
            >
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
