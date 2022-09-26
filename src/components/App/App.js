import "./App.css";

import Header from "../Header/Header";
// import PageDescription from "../PageDescription/PageDescription";
import MainPage from "../MainPage/MainPage";

export default function App() {
  return (
    <div className="app">
      <Header />
      {/* <PageDescription /> */}
      <MainPage />
    </div>
  );
}
