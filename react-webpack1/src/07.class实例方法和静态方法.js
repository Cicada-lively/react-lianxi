function Person(name,age) {
  this.name = name;
  this.age = age;
}
// info属性，直接挂在给了构造函数所以他是静态属性
Person.info = 'aaa'
// 实例方法
Person.prototype.say = function(){
  console.log("我是实例方法")
}
Person.show = function(){
  console.log('这是Person的静态show方法')
}
 let p1 = new Person()
//  p1.show()
p1.say()


console.log('---------------------------------------')

// 创建了一个动物类
// 注意1：在class的{ }的区间内，只能写构造器，静态方法和静态属性，实例方法
// 注意2：class关键字内部，还是用 原来的配方实现的，所以说我们把class关键字称为语法糖
class Animal{
  // 这是类中的构造器，每一个类中都有一个构造器，如果我们没有手动指定构造器，那么可以认为类内部有个隐形的，看不见的 空构造器，类似于constructor(){}
  // 构造器的作用就是，每当new 这个类的时候，必然会优先执行构造器中的代码
  constructor(name,age){
    // 实例属性
    this.name = name;
    this.age = age;
  }
  // 在class内部，通过static修饰的属性，就是静态属性
  static info = 'eee'
  jiao(){
    console.log('我是动物的实力方法')
  }
  static show(){
    console.log('这是Animal的静态方法')
  }
}


