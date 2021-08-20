/*
典型的面向对象编程语言（比如 C++ 和 Java），都有“类”（class）这个概念。所谓“类”就是对象的模板，对象就是“类”的实例
JavaScript 语言的对象体系，不是基于“类”的，而是基于构造函数（constructor）和原型链（prototype）
*/

/*
✅，1，构造函数的特点有3个。
1，为了与普通函数区别，构造函数名字的第一个字母通常大写
2，函数体内部使用了this关键字，代表了所要生成的对象实例。
3，生成对象的时候，必须使用new命令。
*/
var Vehicle = function (p) {
	this.price = p;
};

var v = new Vehicle(500);
console.log(v.price);

//✅，2，构造函数调用，忘记了new，就是普通函数，this这时代表全局对象
var Vehicle1 = function (p) {
	this.price = p;
};

var v1 =  Vehicle1(500);
console.log(price);

//✅，3，构造函数防止漏写new
//方法1，内部使用严格模式use strict
//方法2，构造函数内部判断是否使用new命令，如果发现没有使用，则直接返回一个实例对象
var Vehicle3 = function (p) {
//	方法1：会报错提醒
//	'use strict';
//	方法2：则直接返回，一劳永逸
	 if (!(this instanceof Vehicle3)) {
			return new Vehicle3(p);
		}

	this.price = p;
};

var v3 =  Vehicle3(500);
console.log(v3.price);

//✅，4，new的原理
/*

创建一个空对象，作为将要返回的对象实例。
将这个空对象的原型，指向构造函数的prototype属性。
将这个空对象赋值给函数内部的this关键字。
开始执行构造函数内部的代码。
*/
//简化版的new函数：运行有问题
function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
	// 将 arguments 对象转为数组
	var args = [].slice.call(arguments);
	// 取出构造函数
	var constructor = args.shift();
	// 创建一个空对象，继承构造函数的 prototype 属性
	var context = Object.create(constructor.prototype);
	// 执行构造函数
	var result = constructor.apply(context, args);
	// 如果返回结果是对象，就直接返回，否则返回 context 对象
	return (typeof result === 'object' && result != null) ? result : context;
}

// 实例
//var Person = {
//	name: '张三',
//	age: 38,
//};
//var actor = _new(Person, '张三', 28);

//✅，5，new.target：判断函数是否是new调用
function f() {
	console.log(new.target === f);
}

f() // false
new f() // true

//✅，6，Object.create() 创建实例对象
//以这个现有的对象作为模板，生成新的实例对象
var person1 = {
	name: '张三',
	age: 38,
	greeting: function() {
		console.log('Hi! I\'m ' + this.name + '.');
	}
};

var person2 = Object.create(person1);

person2.name // 张三
person2.greeting() // Hi! I'm 张三.