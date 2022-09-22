
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
            <a className="blh" href="#">
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
            <a className="blh" href="#">
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
          <a className="blh" href="#">
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
          <a className="blh" href="#">
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
          <a className="blh" href="#">
            Pastry
          </a>
          </span>
        </li>
      
      </ul>
    </div>
  );
}
