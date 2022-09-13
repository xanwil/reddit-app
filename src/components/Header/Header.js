import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1>REDDIT B&H</h1>
      <div className="inputContainer">
        <input type="text" placeholder="Search.."></input>
      </div>
    </div>
  );
}
