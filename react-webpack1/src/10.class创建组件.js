// 导入包
import React from "react"
import ReactDOM from "react-dom"

// import '@/06.class-基本使用.js'
// import '@/07.class实例方法和静态方法.js'
// import '@/09.class-继承-公共的方法.js'

//如果要使用 class 定义组件，必须让自己的组件，继承自 React.Component 
// class 组件名称 extends React.Componen{
//   // 在组件内部，必须有render函数
//   render(){
//     // render函数中，必须返回合法的JSX虚拟DOM结构

//     return <div>这是一个class 创建的组件</div>
//   }
// }

// class 关键字创建组件
class Movie extends React.Component{
  // 构造器
  constructor(){
    // 由于Movie组件，继承了React.Component 这个父类，所以，自定义的构造器中，必须调用super()
    super() 
     // 只有调用了super()以后，才能使用this关键字
    this.state = {
      msg: '大家好，我是class创建的Movie组件'
    }
  }
  // render函数的作用，渲染当前组件对应的虚拟DOM元素
  render(){
    // 在class关键字创建的组件中，如果使用外界传递过来的props参数，不需要接收，直接通过 this.props.xxx访问即可
    // 在class组件内部，this表示当前组件的实例对象
    // 注意：不论是class还是普通function创建的组件，他们的props 都是只读的
    // this.props.name = "李四"
    return <div>这是一个movie组件--{this.props.name} --- {this.props.age}
    <h4>{this.state.msg}</h4>
    </div>
  }
}

// 两种创建组件方式的对比
// 注意：使用class关键字创建的组件，有自己的私有属性和生命周期函数
// 注意：使用function创建组件，只有props，没有自己的私有属性和生命周期函数

const user = {
  name: '张三',
  age: 19
}
ReactDOM.render(<div> 123 
  {/* 这里的Movie标签，其实就是Movie类的一个实例对象 */}
  <Movie name = {user.name} age = {user.age}></Movie>
</div>,
  document.getElementById("box"))

