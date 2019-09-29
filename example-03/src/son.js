//son.js 子类
import React, { useContext } from "react";
import { colorContext } from "./index"; //引入父组件的Consumer容器
import Grandson from "./grandson.js"; //引入子组件
console.log(colorContext);
function Son(props) {
  const color = useContext(colorContext);
  return (
    <div
      style={{
        border: "1px solid blue",
        width: "60%",
        margin: "50px auto",
        textAlign: "center"
      }}
    >
      <p>子组件。获取父组件的值:{color}</p>
      <Grandson />
    </div>
  );
}
export default Son;
