import React from 'react'
// 第一种创建组件的方式
export default function Hello(props){
  // 在一个组件中return 一个 null。则表示此组件是空的，什么都不会渲染
  // return null
  console.log(props)
  return <div>我是Hello 组件 ---{props.name} {props.age} {props.gender}</div>
}
// 把组件暴露出去
// export default Hello
