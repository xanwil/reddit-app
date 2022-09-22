import React from "react";
import "./suggestions.css";

export default function Suggestions() {
  return (
    <div className="suggestions">
      <ul>
        <li>
          <span
            onClick={() => {
              setShowComments(!showComments);
            }}
            className=""
          >
            <a className="blh" href="#">
              Biscuits
            </a>
          </span>
        </li>
        <li>
          <a className="blh" href="#">
            Bread
          </a>
        </li>
        <li>
          <a className="blh" href="#">
            Cake
          </a>
        </li>
        <li>
          <a className="blh" href="#">
            Pastry
          </a>
        </li>
        <li>
          <a className="blh" href="#">
            Patisserie
          </a>
        </li>
      </ul>
    </div>
  );
}
