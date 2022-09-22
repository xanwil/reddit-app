import React, { useState } from "react";
import Articles from "../Articles/Articles";
import Suggestions from "../Suggestions/Suggestions";

import "./MainPage.css";

export default function MainPage() {

  const [query, setQuery] = useState(['/search/.json?q=baking%20'])


  return (
    <div className="mainPage">
      <Articles query={query} />
      <Suggestions setQuery={setQuery}/>
    </div>
  );
}
