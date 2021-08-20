//✅1,this是什么？
/*
① this是JavaScript中所有函数的隐藏参数之一，因此每个函数中都能访问this。
② 函数中的this总是指向一个特定对象，该对象具体取决于函数的调用模式。
*/

//✅2,this的优点？
/*
this提供一种更优雅的方式来隐士的传递一个对象引用，因为拥有this，
所以我们可以把API设计得更加的简洁并且易于复用。简单点说，那就是this可以帮助我们省略参数
*/

//✅3,this指向谁？
/*this指向谁绑定给哪个对象并不是在编写代码的时候决定的，而是在运行时进行绑定的，
它的上下文取决于函数调用时的各种条件 。this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式
❐ 普通函数调用(默认绑定)
❐ 对象方法调用(隐式绑定)
❐ 构造函数调用(new绑定)
❐ 函数上下文调用(显式绑定)
*/

//✅3.1 ① 普通函数调用(默认绑定) 
	//如果是在非严格模式下，该this指向全局对象window，
	//如果是在严格模式下，不能将全局对象用于默认绑定，该this会绑定到undefined
//声明全局变量 t
var t = 123;           //所有全局变量自动成为全局对象的属性
function foo() {
//	console.log(this);  //this ---> 全局对象window
	console.log(this.t);//123
}
foo();  //非严格模式下:以普通函数方式调用

function fn() {
//	"use strict";      //作用域开启严格模式
//	console.log(this); //this --->undefined
	//Uncaught TypeError: Cannot read property 't' of undefined
	console.log(this.t);
}
fn();  //严格模式下:以普通函数方式调用

//✅3.2  ② 对象方法调用(隐式绑定)  
	//对象方法调用又称为隐式绑定，当函数引用有上下文对象的时候，隐式绑定规则会把函数调用中的this绑定到这个上下文对象
var name = "wenidngding";
function showName() {
	console.log(this.name);
}
//普通函数调用，函数中的this默认绑定到全局对象，打印wendingding
showName();
//对象的属性为函数
var obj = {
	name:"小猪佩奇",
	showName:showName
}
//对象方法调用，函数中的this绑定到当前的上下文对象obj,打印小猪佩奇
obj.showName();


//✅3.3  ③ 构造函数调用(new绑定)
	//如果以构造函数方式调用，函数内部的this绑定给新创建出来的实例对象
//声明一个Person函数
function Perosn(name,age) {
	this.name = name;
	this.age = age;
	this.show = function () {
		console.log("姓名：" + this.name + " 年龄：" + this.age);
	}
}

//函数调用位置(001)
//构造函数方式调用(new绑定) Person函数内部的this指向新创建的实例对象
var p1 = new Perosn("zs",18);

//函数调用位置(002)
//对象方法的方式调用(隐式绑定) show方法内部的this指向的是引用的对象，也就是p1
//打印：姓名：zs 年龄：18
p1.show();

//✅3.4  ④函数上下文调用(显式绑定) 
	//	call方法和apply方法的使用
	//	作用：借用对象的方法并显式绑定函数内的this。
	//	语法：对象.方法.call(绑定的对象，参数1，参数2...) | 对象.方法.apply(绑定的对象，[参数1，参数2...])
	//  如果以函数上下文的方式来调用，函数内部的this绑定call或者是apply方法的第一个参数，如果该参数不是对象类型那么会自动转换为对应的对象形式。
var obj1 = {
	name:"zs",
	showName:function (a,b) {
		console.log("姓名 " + this.name,a, b);
	}
};

var obj2 = {name:"ls"};

//函数调用位置(001)
//以对象方法的方式调用函数，函数内部的this指向引用对象，也就是obj1
//打印结果为：姓名 zs 1 2
obj1.showName(1,2);

//函数调用位置(002)
//obj2对象并不拥有showName方法，此处报错：obj2.showName is not a function
//obj2.showName();

//函数调用位置(003)
//函数上下文的方式(call)调用函数，函数内部的this绑定给第一个参数obj2
//打印结果为：姓名 ls 哈哈 嘿嘿
//第一个参数：obj2指定函数内this的绑定对象
//其它的参数：哈哈和嘿嘿这两个字符串是传递给showName函数的实参，调用时会赋值给函数的形参：a和b
obj1.showName.call(obj2,"哈哈","嘿嘿");

//函数调用位置(004)
//函数上下文的方式(apply)调用函数，函数内部的this绑定给第一个参数obj2
//打印结果为：姓名 ls 呵呵 嘎嘎
//第一个参数：obj2指定函数内this的绑定对象
//其它的参数：呵呵和嘎嘎这两个字符串是传递给showName函数的实参，调用时会赋值给函数的形参：a和b
obj1.showName.apply(obj2,["呵呵","嘎嘎"]);