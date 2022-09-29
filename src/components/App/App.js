import React, { useState } from "react";
import "./App.css";
import { ThingsProvider } from "../thingsContext";
import Header from "../Header/Header";
// import PageDescription from "../PageDescription/PageDescription";
import MainPage from "../MainPage/MainPage";

export default function App() {
  const [query, setQuery] = useState(['/search/.json?q=baking%20']);

  return (
    <div className="app">
      <ThingsProvider value={{query, setQuery}}>
        <Header />
        {/* <PageDescription /> */}
        <MainPage />
      </ThingsProvider>
    </div>
  );
}
