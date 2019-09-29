// 使用useContext传值
import React from "react";
import ReactDOM from "react-dom";

import Son from "./son"; //引入子组件
// 创建一个 theme Context,
export const colorContext = React.createContext("blue");
console.log(colorContext, "-------ddddd");
class App extends React.Component {
  render() {
    let name = "周小熊1";
    return (
      //Provider共享容器 接收一个name属性
      <colorContext.Provider value={name}>
        <div
          style={{
            border: "1px solid red",
            width: "50%",
            margin: "50px auto",
            textAlign: "center"
          }}
        >
          <p>父组件定义的值:{name}</p>
          <Son />
        </div>
      </colorContext.Provider>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
