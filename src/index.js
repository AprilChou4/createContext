import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Son from "./son"; //引入子组件
// 创建一个 theme Context,
export const { Provider, Consumer, _currentValue } = React.createContext({
  name: "dasdasV型从V型从v"
});
console.log(React.createContext("dasdasd"));
class App extends React.Component {
  render() {
    // let name = "小人头1";
    return (
      //Provider共享容器 接收一个name属性
      // <Provider value={_currentValue}>
      <div
        style={{
          border: "1px solid red",
          width: "30%",
          margin: "50px auto",
          textAlign: "center"
        }}
      >
        <p>父组件定义的值:</p>
        <Son />
      </div>
      // </Provider>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
