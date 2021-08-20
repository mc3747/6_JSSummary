//🍎1，Object.getPrototypeOf()
// 空对象的原型是 Object.prototype
Object.getPrototypeOf({}) === Object.prototype // true

// Object.prototype 的原型是 null
Object.getPrototypeOf(Object.prototype) === null // true

// 函数的原型是 Function.prototype
function f() {}
Object.getPrototypeOf(f) === Function.prototype // true

//🍎2，Object.setPrototypeOf()
//为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象


//🍎3，Object.create()：1个参数和2个参数
//示例对象生成示例对象
// 原型对象
var A = {
	print: function () {
		console.log('hello');
	}
};

// 实例对象
var B = Object.create(A);

Object.getPrototypeOf(B) === A // true
B.print() // hello
B.print === A.print // true

//🍎4，生成新对象的3种方法
var obj1 = Object.create({});
var obj2 = Object.create(Object.prototype);
var obj3 = new Object();

//🍎5，生成不带任何属性的新对象方法
var obj4 = Object.create(null);

//🍎6，对象.prototype.isPrototypeOf()：该对象是否为参数对象的原型
var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);

console.log(o2.isPrototypeOf(o3)) // true
console.log(o1.isPrototypeOf(o3)) // true

//🍎7，Object.prototype.__proto__:对象的原型，只有浏览器才有

//获取原型的3种方法
/*
obj.__proto__：不推荐：浏览器才有
obj.constructor.prototype：不推荐：在手动改变原型对象时，可能会失效
Object.prototype：推荐
*/
var obj = new Object();
obj.__proto__ === Object.prototype
// true
obj.__proto__ === obj.constructor.prototype
// true

//🍎8，Object.getOwnPropertyNames()：返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名
//		Object.keys：只获取那些可以遍历的属性

//🍎9，Object.prototype.hasOwnProperty()
//对象实例的hasOwnProperty方法返回一个布尔值，
//用于判断某个属性定义在对象自身（返回false），还是定义在原型链上（返回true）

//🍎10，in运算符：返回一个布尔值，表示一个对象是否具有某个属性
//不区分该属性是对象自身的属性，还是继承的属性。
console.log('length' in Date) // true

//🍎11，for...in运算符:获得对象的所有可遍历属性（不管是自身的还是继承的）

