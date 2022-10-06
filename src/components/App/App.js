import React, { useState } from "react";
import { StoreProvider } from "../../contexts/storeContext";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";

export default function App() {
  // sets url for api data, dependent on subbreddit page selected
  const [query, setQuery] = useState(["/r/Baking/.json"]);

  // sets comment visibility
  const [activeCommentsId, setActiveCommentsId] = useState(null);

  return (
    <div className="app">
      <StoreProvider
        value={{ query, setQuery, setActiveCommentsId, activeCommentsId }}
      >
        <Header />
        <MainPage />
      </StoreProvider>
    </div>
  );
}
