// console.log("hello world!")
// 1.这两个导入时候，接收的成员名称，必须这样写
import React from 'react'  //创建组件，虚拟DOM/元素，生命周期
import ReactDOM from 'react-dom' //把创建好的 组件 和虚拟DOM 放到页面上展示

// 2.创建虚拟DOM元素
// 参数1，创建元素的类型，字符串，表示元素的名称
// 参数2：是一个对象或者null，表示当前 这个元素的DOM元素的属性
// 参数3：子节点（包括 其他 虚拟DOM 或者 文本子节点）
// 参数n：其他子节点

// const myH2 = React.createElement('h2',null,'我是一个h2标签')
const myH2 = React.createElement('h2',{id: 'myh2',title: 'this is a h2'},'我是一个h2标签')

const myDiv = React.createElement("div",null,"这是一个div元素",myH2)

// 渲染页面上的DOM结构，最好的方式就是写HTML代码



// 3.使用 ReactDOM 把虚拟DOM 渲染到页面上
// 参数1：要渲染的那个虚拟DOM元素
// 参数2：指定页面上一个容器,接收的是一个DOM元素，而不是选择器
ReactDOM.render(myDiv,document.getElementById("box"))


