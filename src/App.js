import React from "react";
import logo from "./logo.svg";
import ChangColorCar from "./BaiTapCar/ChangColorCar";
import DemoDataBingding from "./DataBinding/DemoDataBingding";
import FunctionEvent from "./HandleEvent/FunctionEvent";
import ClassEvent from "./HandleEvent/ClassEvent";
import DemoConditionalAndState from "./DemoLogin/DemoConditionalAndState";
import "./App.css";
import StateLessComponent from "./component/StateLessComponent";
import StateFull, { StateFullComponent } from "./component/StateFullComponent";
import Home from "./baiTapChiaComponent/Home";

function App() {
  return (
    <div>
      {/* <DemoDataBingding /> */}
      {/* <FunctionEvent /> */}
      {/* <ClassEvent /> */}
      {/* <DemoConditionalAndState /> */}
      <ChangColorCar />
      {/* <StateLessComponent />
      <StateFull /> */}
      <Home />
    </div>
  );
}

export default App;
