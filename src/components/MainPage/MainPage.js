import React from "react";
import Articles from "../Articles/Articles";
import Suggestions from "../Suggestions/Suggestions";
// import ProgressBar from "../ProgressBar/ProgressBar";
import "./MainPage.css";

export default function MainPage() {

  return (
    <div className="mainPage">
      <Articles />
      <Suggestions />
    </div>
  );
}
