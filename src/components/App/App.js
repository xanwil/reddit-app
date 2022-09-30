import React, { useState } from "react";
import "./App.css";
import { ThingsProvider } from "../thingsContext";
import Header from "../Header/Header";
// import PageDescription from "../PageDescription/PageDescription";
import MainPage from "../MainPage/MainPage";

export default function App() {
  const [query, setQuery] = useState(['/search/.json?q=baking%20']);
  
  const [showComments, setShowComments] = useState(false);

  
  return (
    <div className="app">
      <ThingsProvider value={{query, setQuery, setShowComments, showComments}}>
        <Header />
        {/* <PageDescription /> */}
        <MainPage />
      </ThingsProvider>
    </div>
  );
}
