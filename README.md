# React.createContext解读

------
**React.createContext释义**
创建一个上下文的容器(组件), defaultValue可以设置共享的默认数据
```python
const {Provider, Consumer} = React.createContext(defaultValue);
```
**Provider(生产者)**: 接收一个 value 属性用于放置共享的数据，并传递给 Provider 的后代 Consumers。一个 Provider 可以联系到多个 Consumers。React 组件允许 Consumers 订阅 context 的改变。
```python
<Provider value={/*共享的数据*/}>
    /*里面可以渲染对应的内容*/
</Provider>
```

**Consumer(消费者)**:这个可以理解为消费者。 他是专门消费供应商(Provider 上面提到的)产生数据。Consumer需要嵌套在生产者下面。才能通过回调的方式拿到共享的数据源。当然也可以单独使用，那就只能消费到上文提到的defaultValue
```python
<Consumer>
  {value => /*根据上下文  进行渲染相应内容*/}
</Consumer>
```

***tip***: 如果上层的组件树没有一个匹配的 Provider，而此时你需要渲染一个 Consumer 组件，那么你可以用到 defaultValue 。这有助于在不封装它们的情况下对组件进行测试。

```python
import React, { useContext} from 'react';
import ReactDOM from 'react-dom';
/*  结果读取为123,没有摘到provider */
const { Provider, Consumer } = React.createContext('我是默认值');
function Bar() {
  return <Consumer>{color => <div>{color}</div>}</Consumer>;
}
function Foo() {
  return <Bar />;
}
function App() {
  return (
      <Foo />
  );
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)
//输出：我是默认值
```
