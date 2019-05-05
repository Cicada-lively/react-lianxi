class Person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  sayHello(){
    console.log('大家好')
  }
}
// 在class类中，可以使用extends关键字，实现子类继承父类
// 语法 class子类extends父类
class American extends Person {
  // 问题1：为什么一定要在constructor中调用super
  // 答案：印俄日，如果一个子类，通过extends关键字继承了父类，那么，在子类的constructor 构造函数中，必须优先调用一下 super()
  // 问题2：super是个什么东西
  // 答案：super()是一个函数，而且它是父类的构造器，子类中的super,其实就是父类中，constructor构造器的一个引用
  // 问题3：为什么调用super()之后，a1实例的name和age都变成了undefined
  constructor(name,age){
    super(name,age)
  }
}

const a1 = new American('Jack',20)
console.log(a1)
a1.sayHello()

class Chinese extends Person{
  // name 姓名
  // age 年龄
  // IDNumber 身份证号
  constructor(name,age,IDNumber){
    // 语法规范 在子类中，this 只能放到super下面
    super(name,age)
    this.IDNumber = IDNumber
  }
}

const b1 = new Chinese('张三', 18, '142567*******988')
console.log(b1)
b1.sayHello()

