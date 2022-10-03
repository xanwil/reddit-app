import React, { useState } from "react";
import "./App.css";
import { ThingsProvider } from "../thingsContext";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";

export default function App() {
  // sets url for api data, dependent on subbreddit page selected
  const [query, setQuery] = useState(["/r/Baking/.json"]);

  // sets comment visibility
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="app">
      <ThingsProvider
        value={{ query, setQuery, setShowComments, showComments }}
      >
        <Header />
        <MainPage />
      </ThingsProvider>
    </div>
  );
}
