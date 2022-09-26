
import React, { useEffect } from "react";
import "./suggestions.css";

export default function Suggestions({setQuery}) {

  const onButtonClick = (subreddit) => {
    setQuery(subreddit)
  }

  return (
    <div className="suggestions">
      <ul>
      <li>
          <span
            onClick={() => 
              onButtonClick('/search/.json?q=baking%20')
            }
            >
            <a className="link" href="#">
              Home
            </a>
          </span>
        </li>
        <li>
          <span
            onClick={() => 
              onButtonClick('/r/biscuits/.json')
            }
            >
            <a className="link" href="#">
              Biscuits
            </a>
          </span>
        </li>
        <li>
        <span
            onClick={() => 
              onButtonClick('/r/Bread/.json')
            }
          >
          <a className="link" href="#">
            Bread
          </a>
          </span>
        </li>
        <li>
        <span
            onClick={() => 
              onButtonClick('/r/cake/.json')
            }
          >
          <a className="link" href="#">
            Cake
          </a>
          </span>
        </li>
        <li>
        <span
            onClick={() => 
              onButtonClick('/r/pastry/.json')
            }
          >
          <a className="link" href="#">
            Pastry
          </a>
          </span>
        </li>
      
      </ul>
    </div>
  );
}
