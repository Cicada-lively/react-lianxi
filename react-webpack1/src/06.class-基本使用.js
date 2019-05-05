function Person(name,age) {
  this.name = name;
  this.age = age;
}
// info属性，直接挂在给了构造函数所以他是静态属性
Person.info = 'aaa'
const p1 = new Person("王多多",18)
console.log(p1)
// 通过new 出来的实例，访问的属性，叫做实例属性
console.log(p1.name)
// ----------------------------------------------
//【 静态属性】：通过构造函数直接访问的属性，叫做静态属性

console.log('---------------------------------------')
// 创建了一个动物类
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
}

const a1 = new Animal('大黄',4)
console.log(a1)
console.log(a1.name)
console.log(Animal.info) //info是Animal 的静态属性