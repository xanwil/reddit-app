
import React, { useContext } from "react";
import "./suggestions.css";
import suggestionsArray from "../utils/suggestionsArray";
import ThingsContext from '../thingsContext'

export default function Suggestions() {

  const {setQuery} = useContext(ThingsContext);

  const onButtonClick = (subreddit) => {
    setQuery(subreddit)
  };

  return (
    <div className="suggestions">
      <ul>
      {suggestionsArray.map((suggestion, index) => {
        return (
          <li key={index}>
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
