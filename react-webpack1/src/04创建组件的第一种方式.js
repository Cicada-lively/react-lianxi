// 导入包
import React from "react"
import ReactDOM from "react-dom"

// 第一种创建组件的方式
function Hello(props){
  // 在一个组件中return 一个 null。则表示此组件是空的，什么都不会渲染
  // return null
  console.log(props)
  return <div>我是Hello 组件 ---{props.name} {props.age} {props.gender}</div>
}
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

