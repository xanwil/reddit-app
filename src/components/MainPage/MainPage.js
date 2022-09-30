import React, { useState } from "react";
import Articles from "../Articles/Articles";
import Suggestions from "../Suggestions/Suggestions";
// import ProgressBar from "../ProgressBar/ProgressBar";
import { ThingsProvider } from "../thingsContext";


import "./MainPage.css";

export default function MainPage() {
  // const [showComments, setShowComments] = useState(false);

  return (
    <div className="mainPage">
    {/* <ThingsProvider value={{setShowComments, showComments}}> */}

      <Articles />
      <Suggestions />
      {/* </ThingsProvider> */}
    </div>
  );
}
