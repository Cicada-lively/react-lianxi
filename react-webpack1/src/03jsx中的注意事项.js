// 导入包
import React from "react"
import ReactDOM from "react-dom"

let a = 10
let str = 'hello world'
let boo = true
let title = '我是title'
const arr =[
  <h2 key="1">我是h2标签</h2>,
  <h3 key="2">我是h3标签</h3>,
  <h4 key="3">我是h4标签</h4>,
  <h5 key="4">我是h5标签</h5>
]
const strArr = ['张三','李四','王五','周六']
let newArr = []
strArr.forEach(item=>{
  newArr.push(<h5 key={item}>{item}</h5>)
})
{
  // 调用 render 函数渲染 jsx xml 比html 严格多了
// 在jsx中混合写入js表达式：在jsx语法中，要把JS代码写到 {}中
// 渲染数字 渲染字符串  渲染布尔值  为属性绑定值  渲染jsx元素  渲染jsx元素数组  将普通字符串数组，转为jsx数组并渲染到页面上
// 在JSX中的写注释 {/* 这是注释 */}
// 为jsx中的元素添加class类名，需要使用className来替代class ; htmlFor 来替代label中的for属性
// 6.在JSX创建DOM的时候，所有的节点，必须唯一的根元素进行包裹
// 7.在JSX语法中，标签必须成对出现，如果是单标签，则必须自闭和
// 当编译引擎，在编译JSX代码的时候，如果遇到了<那么久把它当做HTML代码去编译，如果遇到了{}就把花括号内部的代码当做普通的JS代码去编译
}

ReactDOM.render(<div>
  {a+2}
  <hr/>
  {str}
  <hr/>
  {boo?'条件为真':'条件为假'}
  <p title={title}>我是p标签</p>
  <hr/>
  {arr}
  <hr/>
  {newArr}
  <hr/>
  <p className="objclass">我是class</p>
  {strArr.map(item=><h3 key={item}>{item}</h3>)}
  </div>, document.getElementById("box"))

