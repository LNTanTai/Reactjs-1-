import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateLessComponent from './component/StateLessComponent';
import StateFull, {StateFullComponent} from './component/StateFullComponent';
import Home from "./baiTapChiaComponent/Home";


function App() {
  return (
    <div>
      {/* <StateLessComponent />
      <StateFull /> */}
      <Home/>
    </div>
  );
}

export default App;
