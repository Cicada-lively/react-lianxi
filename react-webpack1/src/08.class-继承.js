class Person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}
// 在class类中，可以使用extends关键字，实现子类继承父类
// 语法 class子类extends父类
class American extends Person {
}

const a1 = new American('Jack',20)
console.log(a1)

class Chinese extends Person{
}

const b1 = new Chinese('张三', 18)
console.log(b1)

