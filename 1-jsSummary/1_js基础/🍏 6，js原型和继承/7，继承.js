/*
继承的步骤：
第一步是在子类的构造函数中，调用父类的构造函数
第二步是让子类的原型指向父类的原型
*/

//✅子类整体继承父类：Rectangle继承Shape
function Shape() {
	this.x = 0;
	this.y = 0;
}
Shape.prototype.move = function (x, y) {
	this.x += x;
	this.y += y;
	console.info('Shape moved.');
};
// 第一步，在子类的构造函数中，调用父类的构造函数
//function Rectangle() {
//	Shape.call(this); // 调用父类构造函数
//}
// 另一种写法
function Rectangle() {
	this.base = Shape;
	this.base();
}
// 第二步，子类继承父类的原型
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
//验证
var rect = new Rectangle();
console.log(rect instanceof Rectangle)  // true
console.log(rect instanceof Shape)  // true
console.log(rect.x)

//✅子类继承父类的单个方法
function A() {
	this.x = 0;
	this.y = 0;
}
A.prototype.print = function () {
		console.log('a');
		console.log(this.x);
	}
function B() {
	
}
B.prototype.print = function() {
	A.prototype.print.call(this);

}
var b = new B();
b.print();

//✅子类多层继承
//JavaScript 不提供多重继承功能，即不允许一个对象同时继承多个对象。但是，可以通过变通方法
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