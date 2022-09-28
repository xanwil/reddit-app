import React from "react";
import "./Header.css";

export default function Header(props) {
  const {setMenuToggle} = props;

  const onButtonClick = () => {
    
  }

  return (
    <div className="header">
      <h1>
        <span className="pink">
          <i className="fa fa-reddit"></i> Reddit
        </span>
        <span className="black">Baking</span>
      </h1>
      <form className="inputContainer">
        <input type="text" placeholder="Search.." name="search"></input>
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="hamburger">
      <span
                  onClick={() => {
                    onButtonClick();
                  }}
                >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        </span>
      </div>
    </div>
  );
}
