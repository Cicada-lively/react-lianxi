// 导入包
import React from "react"
import ReactDOM from "react-dom"
// 导入Hello组件
// 默认，如果不做单独的配置的话，不能省略 .jsx后缀名
import Hello from './components/Hello'

const dog = {
  name: '大黄',
  age: 3,
  gender: '雄性'
}
ReactDOM.render(<div>123 

  {/* 直接把标签 */}
  {/* <Hello name={dog.name} age={dog.age} gender={dog.gender}> </Hello> </div>,  */}
  <Hello {...dog}></Hello> </div>,
  document.getElementById("box"))

