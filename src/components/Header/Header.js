import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1><span className="pink"><i className="fa fa-reddit"></i> Reddit</span><span className="black">Baking</span></h1>
      <form className="inputContainer">
        <input type="text" placeholder="Search.." name="search"></input>
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
  );
}
