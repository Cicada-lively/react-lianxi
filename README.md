## react的练手项目
** 首先采用 react+webpack 自己简单配置 **
* 学习采用基本的 react 语法 *`

 两种创建组件方式的对比
 注意：使用class关键字创建的组件，有自己的私有属性和生命周期函数
 注意：使用function创建组件，只有props，没有自己的私有属性和生命周期函数
 1.用构造函数创建出来的组件，叫做“无状态组件”【无状态组件今后用的不多】
 2.用class关键字创建出来的组件，叫做“有状态的组件”【今后用的最多】
 3.什么情况下使用有状态组件，什么情况使用无状态的组件
 如果 一个组件需要有自己的私有数据，则推荐使用：class创建的有状态的组件
 如果一个组件不需要有私有的数据，则推荐使用：无状态组件
 React官方说：无状态组件，由于没有自己的state和生命周期函数，所以运行效率会比有状态组件稍微高一些

 有状态组件和无状态的组件的本质区别就是：有无state属性和有无生命周期函数

组件中的props和state/data之间的区别
  props中的数据都是外界传递过来的
  state/data中的数据，都是组件私有的(通过Ajax获取回来的数据，一般都是私有数据)
  props中的书都是只读的，不能重新赋值
  state/data中的数据都是可读可写的

