import React, { useState } from "react";
import "./App.css";

import Header from "../Header/Header";
// import PageDescription from "../PageDescription/PageDescription";
import MainPage from "../MainPage/MainPage";

export default function App() {

  const [menuToggle, setMenuToggle] = useState('false');

  return (
    <div className="app">
      <Header setMenuToggle={setMenuToggle}/>
      {/* <PageDescription /> */}
      <MainPage menuToggle={menuToggle}/>
    </div>
  );
}
