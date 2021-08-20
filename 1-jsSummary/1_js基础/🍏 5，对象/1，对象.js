// ✅ 1，调用对象的方式
/*
1，基本写法
2，字面量的方式创建对象
3，内置构造函数创建对象
4，封装工厂函数创建对象
5，定义构造函数创建对象
6，调用系统方法创建对象
*/ 
// 1，基本写法：不够简洁和直观，而且本身的代码复用性不好，不推荐
var obj1 = new Object();
obj1.name = 'wendingding';
obj1.age = 18;
console.log(obj1);

// 2，字面量写法：
var obj2 = {name:"wendingding",age:18};
console.log(obj2);

// 3, 内置构造函数
/*
String
Number
Boolean
Date
Array
Function
Object
RegExp*/ 
var s1 = 'abc';//s1是字符串
var obj3 = new String('abc');//obj3是字符串对象
console.log(typeof(s1));
console.log(typeof(obj3));

// 4, 工厂函数创建对象
function createBookNew (name,price) {
    var book = new Object();
    book.name = name;
    book.price = price;
    return book;//一定要加上return
}
//使用工厂函数来创建对象
var book1 = createBookNew("声名狼藉者的的生活","42.00");
var book2 = createBookNew("人性的枷锁","49.00");
var book3 = createBookNew("悟空传","28.00");
console.log(book1.name);
console.log(book2.name);
console.log(book3.name);

// 5, 自定义构造函数创建对象
function CreateBook (name,price,author,press) {
   //使用new调用该构造函数时,默认在内部会先创建Object类型的实例对象
   //并把该对象关联到当前构造函数的原型对象上，并把函数内的this绑定到该对象
   //通过this来给实例对象设置属性和方法
    this.name = name;
    this.price = price;
    this.author = author;
    this.press = press;
    this.read = function () {
        console.log("我的书名为:"+this.name+",作者为"+this.author+"....");
    };

  //默认总是把新创建的实例对象返回
}

//使用new + 函数名() 的方式来调用
var bookObj = new CreateBook("声名狼藉者的的生活","42.00","福柯","北京大学出版社");
bookObj.read();