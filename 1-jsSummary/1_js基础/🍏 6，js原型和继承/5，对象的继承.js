//大部分面向对象的编程语言，都是通过“类”（class）实现对象的继承
//JavaScript 语言的继承不通过 class，而是通过“原型对象”（prototype）实现
//1，✅prototype对象
//函数f默认具有prototype属性，指向一个对象

//2，✅constructor属性
//prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数
//3种写法等效：a.constructor == A.Prototype.constructor == A
function A() {}
var a = new A();

console.log(a.constructor === A) // true
console.log(a.constructor === A.prototype.constructor) // true

//3，✅instanceof运算符：返回一个布尔值，表示对象是否为某个构造函数的实例
	//isPrototypeOf方法：与instanceof运算符等效，逆向
/*
v instanceof Vehicle
// 等同于
Vehicle.prototype.isPrototypeOf(v)
*/	


//4，✅构造函数的继承
//🍎第一步：子类的构造函数中，调用父类的构造函数
function Super() {
	this.x = 0;
	this.y = 0;
}

Super.prototype.move = function (x, y) {
	this.x += x;
	this.y += y;
	console.info('Super moved.');
};
function Sub1() {
	Super.call(this); // 调用父类构造函数
}
// 另一种写法
function Sub2() {
	this.base = Super;
	this.base();
}
// 🍎第二步，子类继承父类的原型
Sub1.prototype = Object.create(Super.prototype);
Sub1.prototype.constructor = Sub1;
	// 另一种写法:会使子类会具有父类实例的方法，不是绝对的原型继承，不赞成使用
//Sub1.prototype = new Super();

// 🍎第三步：使用
var rect = new Sub1();
console.log(rect instanceof Super)  // true
console.log(rect instanceof Sub1)  // true

//5，✅构造函数只单独继承方法
function Super2() {
	this.x = 0;
	this.y = 0;
}

Super2.prototype.move = function (x, y) {
	this.x += x;
	this.y += y;
	console.info('Super moved.');
};

Sub2.prototype.print = function() {
	Super.prototype.move.call(this);
}
var sub2 = new Sub2();
sub2.print();
console.log(sub2.x);

//6，✅构造函数多重继承：这种模式又称为 Mixin（混入）
//JavaScript 不提供多重继承功能，即不允许一个对象同时继承多个对象
function M1() {
	this.hello = 'hello';
}

function M2() {
	this.world = 'world';
}

function S() {
	M1.call(this);
	M2.call(this);
}

// 继承 M1
S.prototype = Object.create(M1.prototype);
// 继承链上加入 M2
Object.assign(S.prototype, M2.prototype);

// 指定构造函数
S.prototype.constructor = S;

var s = new S();
console.log(s.hello) // 'hello'
console.log(s.world) // 'world'