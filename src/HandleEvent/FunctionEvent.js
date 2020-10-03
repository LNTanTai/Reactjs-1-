import React from "react";

export default function FunctionEvent() {
  const handleClick = () => {
    alert("click me");
  };
  const handleClickParams = (message) => {
    alert(message);
  };
  return (
    <div>
      <h2>Function Event</h2>
      {/* xu ly su kien trong js thuan ko ap dung trong reactjs duoc*/}
      <button onclick="handleClick()"> click me</button>
      {/* xu ly su kien trong reactJS */}

      <button onClick={handleClick}> click reactjs</button>
      <button
        onClick={() => {
          handleClickParams("hello cyberSoft");
        }}
      >
        click reactjs params
      </button>
    </div>
  );
}
