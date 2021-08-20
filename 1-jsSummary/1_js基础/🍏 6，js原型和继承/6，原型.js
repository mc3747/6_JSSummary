/*
✅
1,任意函数都有原型prototype,而不是任意对象，任意对象的原型叫__proto__
2，构造函数的原型，可以实现资源共享
*/
function f1() {
	this.name = 'a'
}
var f2 = {a:'a'}
console.log(f1.prototype)
console.log(f2.prototype)

/*
✅
原型对象的定义：构造函数名.prototype
原型对象的使用：跟普通属性一样
*/
function Animal(name) {
	this.name = name;
}
Animal.prototype.color = 'white';

var cat1 = new Animal('大毛');
var cat2 = new Animal('二毛');
console.log(cat1.color);
console.log(cat2.color);

/*
✅ constructor属性：
指向prototype对象所在的构造函数；
实例对象的属性和函数原型都可以访问
constructor有name属性
*/
console.log(cat1.constructor);
console.log(Animal.prototype.constructor);

//✅修改原型，要一起改constructor
function Person(name) {
	this.name = name;
}
console.log(Person.prototype.constructor)
console.log(Person.prototype.constructor.name)
//修改原型坏写法1
//Person.prototype = {
//	constructor: Person,
//	method: function () {}
//};
//修改原型好写法1
//Person.prototype = {
//	constructor: Person,
//	method: function () {}
//};
//修改原型好写法2
Person.prototype.method1 = function () {};
console.log(Person.prototype.constructor)

/*
✅ instanceof 运算符
表示对象是否为某个构造函数的实例
v instanceof Vehicle等同于Vehicle.prototype.isPrototypeOf(v)
只适用于对象，不适用于原始类型，如string
应用：构造函数忘记加new的情况
*/
function Fubar (foo, bar) {
	if (this instanceof Fubar) {
		this._foo = foo;
		this._bar = bar;
	} else {
		return new Fubar(foo, bar);
	}
}


//__proto__属性
/*
1,js里所有的对象都有proto属性(对象，函数)，指向构造该对象的构造函数的原型。
2,只有函数function才具有prototype属性。这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）。原型对象也有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数。
*/
var A = function () {};
var B ={};

console.log(A.__proto__)
console.log(B.__proto__)