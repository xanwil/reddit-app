import React from "react";
import "./Header.css";
import MobileMenu from "./../MobileMenu/MobileMenu";

export default function Header() {
  return (
    <div>
      <div className="header">
        <h1>
          <span className="pink">
            <i className="fa fa-reddit"></i> Reddit
          </span>
          <span className="black">Baking</span>
        </h1>

        <MobileMenu />
      </div>
    </div>
  );
}
