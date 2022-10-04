import React, { useState } from "react";
import "./App.css";
import { ThingsProvider } from "../thingsContext";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";

export default function App() {
  // sets url for api data, dependent on subbreddit page selected
  const [query, setQuery] = useState(["/r/Baking/.json"]);

  // sets comment visibility
  const [activeCommentsId, setActiveCommentsId] = useState(null);

  return (
    <div className="app">
      <ThingsProvider
        value={{ query, setQuery, setActiveCommentsId, activeCommentsId }}
      >
        <Header />
        <MainPage />
      </ThingsProvider>
    </div>
  );
}
