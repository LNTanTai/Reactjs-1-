import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StateLessComponent from "./component/StateLessComponent";
import StateFull, { StateFullComponent } from "./component/StateFullComponent";
import Home from "./baiTapChiaComponent/Home";
import DemoCourse from "./ListAndKeys/DemoCourse";

function App() {
  return (
    <div>
      {/* <StateLessComponent />
      <StateFull /> */}
      {/* <Home/> */}
      <DemoCourse />
    </div>
  );
}

export default App;
