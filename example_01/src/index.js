// 使用props传递
import React from "react";
import ReactDOM from "react-dom";

function Father(props) {
  return <Son theme="dark" />;
}

function Son(props) {
  return <Grandson theme={props.theme} />;
}

function Grandson(props) {
  return <div>接收父组件{props.theme}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Father />, rootElement);
