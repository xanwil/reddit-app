import "./App.css";

import Header from "../Header/Header";
import PageDescription from "../PageDescription/PageDescription";
import Articles from "../Articles/Articles";
import Suggestions from "../Suggestions/Suggestions";

export default function App() {
  return (
    <div className="app">
      <Header />
      <PageDescription />
      <div className="mainPage">
        <Articles />
        <Suggestions />
      </div>
    </div>
  );
}
