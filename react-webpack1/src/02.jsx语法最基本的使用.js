// 导入包
import React from "react"
import ReactDOM from "react-dom"

// 2.创建虚拟DOM元素
// 什么是虚拟DOM 用JS对象的形式，来表示 DOM 和DOM之间的嵌套
// const mydiv = React.createElement("div",{id: 'mydiv',title: 'this is div'},"我是一个div元素")
// HTML是最优秀的标记语言；
// 注意，在JS文件中，默认不能写 这种类似于 HTML 的标记语言，否则打包会失败
// 可以使用babel 来转换这些 JS中的标签
// 大家注意：这种 在 JS中，混合写入类似于 HTML 的语法，叫做JSX语法，符合XML规范的JS
// 注意：JSX语法的本质，还是在运行的时候，被转换成了 React.createElement 形式来执行的

const mydiv = <div id="myDiv" title="this is a div">这是一个div元素</div>

// 3.调用render函数渲染
ReactDOM.render(mydiv, document.getElementById("box"))

